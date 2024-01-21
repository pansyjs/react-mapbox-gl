import { defineConfig } from 'father';

export default defineConfig({
  esm: {
    output: 'es',
    transformer: 'esbuild',
  },
  cjs: {
    output: 'lib',
    transformer: 'esbuild',
  },
  platform: 'browser',
});
