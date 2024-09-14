import { defineConfig } from "tsup";
// import svgr from "esbuild-plugin-svgr";
import jsx from "@svgr/plugin-jsx";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  entry: ["src/lib"],
  splitting: false,
  sourcemap: true,
  clean: true,
  shims: true,
  dts: true,
  format: ["cjs", "esm"],
  loader: {
    ".png": "copy",
    ".css": "copy",
    ".ttf": "copy",
  },
  esbuildPlugins: [svgr({})],
});
