"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AVATAR_AMAH_URL = "https://legendary-selkie-d298b7.netlify.app";

export default function AvatarAmahWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3 sm:bottom-8 sm:right-8">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="h-[min(640px,80vh)] w-[min(380px,92vw)] overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl shadow-black/60"
          >
            <iframe
              src={AVATAR_AMAH_URL}
              title="Avatar Amah"
              className="h-full w-full border-0"
              allow="clipboard-write"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? "Fermer Avatar Amah" : "Discuter avec Avatar Amah"}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-accent text-white shadow-lg shadow-black/40 transition hover:bg-accent/85"
      >
        {open ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-6 w-6">
            <path
              d="M4 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8c-1 0-2-.16-2.9-.46L4 21l1.46-5.1C4.55 14.5 4 13.3 4 12Z"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
