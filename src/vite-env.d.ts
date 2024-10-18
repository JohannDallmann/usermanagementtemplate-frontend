/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string;
    readonly VITE_IDM_URL: string;
    readonly VITE_IDM_REALM: string;
    readonly VITE_IDM_CLIENTID: string;
    readonly VITE_IDM_TOKENUPDATE: number;
  }