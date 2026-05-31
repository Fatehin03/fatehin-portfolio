import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center bg-ink-950 px-6 text-white">
      <div className="max-w-md rounded-[2rem] border border-white/10 bg-white/6 p-8 text-center shadow-soft backdrop-blur-2xl">
        <p className="text-xs uppercase tracking-[0.35em] text-electric-300/90">404</p>
        <h1 className="mt-3 text-3xl font-semibold">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-white/60">
          The page you are looking for does not exist. Return to the portfolio home screen.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium text-white transition hover:bg-white/15"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
