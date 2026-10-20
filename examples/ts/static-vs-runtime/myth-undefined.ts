interface Config {
  timeout?: number;
}

const config: Config = {};
console.log(config.timeout + 1); // NaN，TypeScript 不报错
