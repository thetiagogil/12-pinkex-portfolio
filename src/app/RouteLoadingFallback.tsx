export const RouteLoadingFallback = () => {
  return (
    <main
      aria-live="polite"
      className="bg-background text-foreground grid min-h-screen place-items-center px-6"
      role="status"
    >
      <div className="flex flex-col items-center gap-3 text-center">
        <span className="font-display text-accent text-3xl">Pinkex</span>
        <span className="text-muted-foreground text-sm">Loading page...</span>
      </div>
    </main>
  );
};
