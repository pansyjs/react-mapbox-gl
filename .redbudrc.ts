import { defineConfig } from 'redbud';

export default defineConfig({
  esm: {
    output: 'lib',
  },
  cjs: {
    output: 'lib/_cjs',
  },
  platform: 'browser',
});
