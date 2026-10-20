// declare global 只影响类型检查，不会创建 window.__APP_VERSION__
console.log(typeof window.__APP_VERSION__); // undefined（若宿主未注入）
