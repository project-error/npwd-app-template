import * as esbuild from 'esbuild';

const isWatch = process.argv.includes('--watch');

const commonOptions = {
  bundle: true,
  format: 'cjs',
  target: 'es2020',
  logLevel: 'info',
  keepNames: true,
};

const clientConfig = {
  ...commonOptions,
  entryPoints: ['client/client.ts'],
  outfile: 'dist/client.js',
  platform: 'browser',
};

const serverConfig = {
  ...commonOptions,
  entryPoints: ['server/server.ts'],
  outfile: 'dist/server.js',
  platform: 'node',
};

async function build() {
  if (isWatch) {
    const [clientCtx, serverCtx] = await Promise.all([
      esbuild.context(clientConfig),
      esbuild.context(serverConfig),
    ]);
    await Promise.all([clientCtx.watch(), serverCtx.watch()]);
    console.log('Watching for changes...');
  } else {
    await Promise.all([esbuild.build(clientConfig), esbuild.build(serverConfig)]);
    console.log('Build complete!');
  }
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
