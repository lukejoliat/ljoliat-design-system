const esbuild = require('esbuild');

esbuild
  .build({
    entryPoints: ['packages/index.js'],
    outdir: 'lib',
    bundle: true,
    sourcemap: true,
    minify: false,
    splitting: true,
    format: 'esm',
    target: ['esnext'],
  })
  .catch(() => process.exit(1));
