export function GridBackgroundDemo() {
  return (
    <div className="h-screen w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}

      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black/20 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-neutral-500 py-8 opacity-10">
        FreiHaus
      </p>
      {/* Wasserzeichen in den Ecken */}
      <p className="text-4xl sm:text-7xl font-bold absolute top-20 left-20 z-20 bg-clip-text text-neutral-500 py-8 opacity-10">
        Zukunft
      </p>
      <p className="text-4xl sm:text-7xl font-bold absolute top-20 right-20 z-20 bg-clip-text text-neutral-500 py-8 opacity-10">
        kann
      </p>
      <p className="text-4xl sm:text-7xl font-bold absolute bottom-20 left-20 z-20 bg-clip-text text-neutral-500 py-8 opacity-10">
        man
      </p>
      <p className="text-4xl sm:text-7xl font-bold absolute bottom-20 right-20 z-20 bg-clip-text text-neutral-500 py-8 opacity-10">
        bauen
      </p>
    </div>
  );
}
