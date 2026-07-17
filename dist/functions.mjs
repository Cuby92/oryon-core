// src/functions/useDeviceSpecs.ts
import { useState, useEffect } from "react";
function useDeviceSpecs() {
  const [specs, setSpecs] = useState({
    mobile: false,
    lowPowerDevice: false,
    mounted: false
  });
  useEffect(() => {
    const nav = navigator;
    const mobile = /Mobi|Android|iPhone/i.test(navigator.userAgent) || window.matchMedia("(pointer: coarse)").matches;
    const lowRAM = nav.deviceMemory && nav.deviceMemory <= 4;
    const lowCPU = nav.hardwareConcurrency && nav.hardwareConcurrency <= 4;
    const saveDataActive = nav.connection?.saveData === true;
    const lowPowerDevice = !!(lowRAM || lowCPU || saveDataActive);
    setSpecs({
      mobile,
      lowPowerDevice,
      mounted: true
    });
  }, []);
  return specs;
}
export {
  useDeviceSpecs
};
//# sourceMappingURL=functions.mjs.map