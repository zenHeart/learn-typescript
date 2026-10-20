export {};

declare global {
  interface Window {
    __APP_VERSION__: string;
  }
}

console.log(window.__APP_VERSION__);
