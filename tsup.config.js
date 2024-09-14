import {defineConfig} from 'tsup';

export default defineConfig({
  entry: ['src'],
  splitting: false,
  sourcemap: true,
  clean: true,
  shims: true,
  dts: true,
  format: ['cjs', 'esm'],
  loader: {
    '.png': 'copy',
    '.css': 'copy',
    '.ttf': 'copy',
  },
});
