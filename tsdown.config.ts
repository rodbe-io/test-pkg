// tsdown.config.ts
import { defineConfig } from 'tsdown';

const MY_ENV_1 = process.env['MY_ENV_1'] ?? 'ups';
const MY_ENV_2 = process.env['MY_ENV_2'] ?? 'upsi';

console.log('[build] MY_ENV_1:', MY_ENV_1);
console.log('[build] MY_ENV_2:', MY_ENV_2);

// eslint-disable-next-line no-restricted-exports
export default defineConfig({
  clean: true,
  define: {
    mysingleton: '"hey"',
    'process.env.MY_ENV_1': JSON.stringify(process.env['MY_ENV_1'] ?? ''),
    'process.env.MY_ENV_2': JSON.stringify(MY_ENV_2),
  },
  dts: true,
  entry: ['./src/index.ts'],
  // envFile: '.env', cuando se quiera usar variables de entorno
  fixedExtension: false,
  format: ['esm', 'cjs'],
  minify: false,
  sourcemap: false,
  treeshake: true,
});
