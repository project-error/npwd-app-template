/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_REACT_APP_IN_GAME: boolean;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}