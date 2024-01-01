import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import topLevelAwait from 'vite-plugin-top-level-await';
import federation from '@originjs/vite-plugin-federation';
const packageJson = require('./package.json');
const { dependencies, name } = packageJson;

delete dependencies['@emotion/styled'];
delete dependencies['@mui/material'];
delete dependencies['@mui/styles'];

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'mockapp',
      filename: 'remoteEntry.js',
      exposes: {
        './config': './npwd.config.ts',
      },
      shared: ['react', 'react-dom', '@emotion/react', 'react-router-dom', 'fivem-nui-react-lib'],
    }),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`,
    }),
  ],
  base: './',
  define: {
    process: {
      env: {
        VITE_REACT_APP_IN_GAME: process.env.VITE_REACT_APP_IN_GAME,
      },
    },
  },
  server: {
    port: 3002,
  },
  build: {
    outDir: 'web/dist',
    emptyOutDir: true,
    modulePreload: false,
    assetsDir: '',
  },
});
