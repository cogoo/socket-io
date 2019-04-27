import { Config } from '@stencil/core';
import builtins from 'rollup-plugin-node-builtins';

export const config: Config = {
  namespace: 'mycomponent',
  plugins: [builtins()],
  outputTargets: [
    { type: 'dist' },
    { type: 'docs' },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  nodeResolve: {
    browser: true,
    preferBuiltins: true,
  },
};
