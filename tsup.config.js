import { defineConfig } from "tsup";
// import svgr from "esbuild-plugin-svgr";

export default defineConfig({
  entry: ["src"],
  splitting: false,
  format: ["cjs", "esm"], // Output formats
  dts: true, // Generate declaration files
  sourcemap: true, // Generate source maps
  clean: true, // Clean the output directory before each build
  jsx: "react-jsx", // or 'react', depending on React version

  // esbuildPlugins: [svgr({})],
});
