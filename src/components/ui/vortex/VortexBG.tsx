import Vortex from "./Vortex";

const VortexBG = () => {
  return (
    <>
      {/* Vortex Background */}
      <div className="absolute inset-0 h-full w-full -z-10 overflow-hidden opacity-75 lg:opacity-100">
        <Vortex
          backgroundColor="transparent"
          rangeY={600}
          particleCount={50}
          baseHue={220}
          baseSpeed={0.0}
          rangeSpeed={0.5}
          className="w-full h-full"
        />
      </div>
    </>
  );
}

export default VortexBG;
