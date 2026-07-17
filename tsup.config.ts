import { defineConfig } from "tsup";
import sassPlugin from "esbuild-plugin-sass";

export default defineConfig({
  entry: {
    index: "src/index.ts",
    types: "src/types/index.ts",
    functions: "src/functions/index.ts"
  },
  format: ["cjs", "esm"],   // Output both CommonJS and ESModules
  dts: true,                // Generate declaration files (.d.ts)
  splitting: false,
  sourcemap: true,          // Source maps for debugging
  clean: true,              // Rebuild clean dist folder every time
  external: ["react"],      // Avoid bundling React into your library
  plugins: [sassPlugin()]
});