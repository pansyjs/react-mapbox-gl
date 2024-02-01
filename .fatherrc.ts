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
  umd: {
    name: 'ReactMapboxGl',
    output: 'dist',
    externals: {
      react: 'React',
      'react-dom': 'ReactDOM',
      'mapbox-gl': 'mapboxgl',
    },
  },
  platform: 'browser',
});
