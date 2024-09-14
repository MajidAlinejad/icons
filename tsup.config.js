import { defineConfig } from "tsup";
import svgr from "esbuild-plugin-svgr";
import jsx from "@svgr/plugin-jsx";

export default defineConfig({
  entry: ["src/lib"],
  splitting: false,
  sourcemap: true,
  clean: true,
  shims: true,
  dts: false,
  format: ["cjs", "esm"],
  loader: {
    ".png": "copy",
    ".css": "copy",
    ".ttf": "copy",
  },
  // esbuildPlugins: [svgr({ svgo: false, plugins: [jsx] })],
});
