type NestForm  = {
  a: string,
  b: number,
  c: {
    e: number,
    f: {
      g: number
    }
  }[]
}

const form: NestForm = {
  a: '1',
  b: 2,
  c: []
};

