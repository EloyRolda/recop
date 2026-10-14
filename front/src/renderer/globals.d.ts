// Lo que la ventana tiene en `window` además de lo del navegador.

import type { RecopBridge } from '../shared/bridge';

declare global {
  interface Window {
    /** El puente con el proceso principal. No está si la app corre en un navegador. */
    recopBridge?: RecopBridge;
  }
}

export {};
