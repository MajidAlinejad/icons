import { defineConfig } from "tsup";
// import svgr from "esbuild-plugin-svgr";
import jsx from "@svgr/plugin-jsx";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  entry: ["src"],
  splitting: false,
  sourcemap: true,
  clean: true,
  shims: true,
  dts: false,
  format: ["cjs", "esm"],
  loader: {
    ".svg": "copy",
  },
  // esbuildPlugins: [svgr({})],
});
