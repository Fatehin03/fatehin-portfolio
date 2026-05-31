'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="grid min-h-screen place-items-center bg-ink-950 px-6 text-white">
      <div className="max-w-md rounded-[2rem] border border-white/10 bg-white/6 p-8 text-center shadow-soft backdrop-blur-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-rose-300">Something went wrong</p>
        <h1 className="mt-3 text-3xl font-semibold">Portfolio error</h1>
        <p className="mt-4 text-sm leading-7 text-white/60">
          The page failed to load correctly. You can retry or return to the home screen.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button
            type="button"
            onClick={reset}
            className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
          >
            Retry
          </button>
          <Link
            href="/"
            className="inline-flex justify-center rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
          >
            Home
          </Link>
        </div>
      </div>
    </div>
  );
}
