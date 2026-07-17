import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],  // The library's entry point
  format: ["cjs", "esm"],   // Output both CommonJS and ESModules
  dts: true,                // Generate declaration files (.d.ts)
  splitting: false,
  sourcemap: true,          // Source maps for debugging
  clean: true,              // Rebuild clean dist folder every time
  external: ["react"],      // Avoid bundling React into your library
});