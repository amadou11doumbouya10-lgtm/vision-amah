"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type TypewriterProps = {
  /** Un `\n` produit un retour à la ligne (le conteneur est en whitespace-pre-line). */
  text: string;
  /** Millisecondes par caractère. */
  speed?: number;
  /** Délai avant le début de la frappe, en millisecondes. */
  startDelay?: number;
  className?: string;
};

export default function Typewriter({
  text,
  speed = 32,
  startDelay = 200,
  className,
}: TypewriterProps) {
  const reducedMotion = useReducedMotion();
  const [typed, setTyped] = useState(0);

  useEffect(() => {
    if (reducedMotion) {
      setTyped(text.length);
      return;
    }

    setTyped(0);
    let index = 0;
    let interval: number | undefined;

    const timeout = window.setTimeout(() => {
      interval = window.setInterval(() => {
        index += 1;
        setTyped(index);
        if (index >= text.length && interval) window.clearInterval(interval);
      }, speed);
    }, startDelay);

    return () => {
      window.clearTimeout(timeout);
      if (interval) window.clearInterval(interval);
    };
  }, [text, speed, startDelay, reducedMotion]);

  const isTyping = typed < text.length;

  return (
    <span className={className}>
      {/* Le texte complet reste dans le DOM pour Google et les lecteurs d'écran :
          animer le contenu du <h1> le laisserait vide au rendu serveur, et un
          lecteur d'écran annoncerait chaque caractère au fil de la frappe. */}
      <span className="sr-only">{text}</span>
      <span aria-hidden="true" className="whitespace-pre-line">
        {text.slice(0, typed)}
        {isTyping && (
          /* Largeur nulle : le curseur se superpose au reste du texte au lieu de le
             pousser, sinon chaque caractère tapé pourrait relancer un retour à la
             ligne et faire sauter la hauteur du titre. */
          <span className="inline-block w-0 animate-caret font-normal text-accent">|</span>
        )}
        {/* Le reste du texte est présent mais transparent : il réserve la place,
            donc la frappe ne décale ni les boutons ni le reste de la page. */}
        <span className="opacity-0">{text.slice(typed)}</span>
      </span>
    </span>
  );
}
