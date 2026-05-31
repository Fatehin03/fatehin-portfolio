export function NoiseOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] opacity-[0.035] mix-blend-soft-light"
      style={{
        backgroundImage:
          "url('data:image/svg+xml,%3Csvg viewBox=%220 0 140 140%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%222%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22140%22 height=%22140%22 filter=%22url(%23n)%22 opacity=%220.55%22/%3E%3C/svg%3E')",
      }}
    />
  );
}
