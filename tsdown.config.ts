// tsdown.config.ts
import { defineConfig } from 'tsdown';

// eslint-disable-next-line no-restricted-exports
export default defineConfig({
  clean: true,
  define: {
    mysingleton: '"hey"',
    'process.env.MY_ENV_1': JSON.stringify(process.env['MY_ENV_1'] ?? ''),
    'process.env.MY_ENV_2': JSON.stringify(process.env['MY_ENV_2'] ?? 'upsi'),
  },
  dts: true,
  entry: ['./src/index.ts'],
  // envFile: '.env', cuando se quiera usar variables de entorno
  fixedExtension: false,
  format: ['esm', 'cjs'],
  minify: true,
  sourcemap: false,
  treeshake: true,
});
