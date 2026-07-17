// src/Slide/Slide.module.scss
var Slide_module_default = {};

// src/Slide/Slide.tsx
import { jsx } from "react/jsx-runtime";
var s = Slide_module_default;
function Slide({ children, className, ref, id }) {
  return /* @__PURE__ */ jsx("section", { className: `${className} ${s.slide}`, ref, id, children });
}
export {
  Slide
};
