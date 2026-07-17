"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/functions/index.ts
var functions_exports = {};
__export(functions_exports, {
  useDeviceSpecs: () => useDeviceSpecs
});
module.exports = __toCommonJS(functions_exports);

// src/functions/useDeviceSpecs.ts
var import_react = require("react");
function useDeviceSpecs() {
  const [specs, setSpecs] = (0, import_react.useState)({
    mobile: false,
    lowPowerDevice: false,
    mounted: false
  });
  (0, import_react.useEffect)(() => {
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  useDeviceSpecs
});
//# sourceMappingURL=functions.js.map