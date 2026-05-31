export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-ink-950 text-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-14 w-14 animate-spin rounded-full border-2 border-white/10 border-t-electric-400" />
        <p className="text-sm text-white/55">Loading portfolio…</p>
      </div>
    </div>
  );
}
