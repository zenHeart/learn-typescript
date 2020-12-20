type Opts = {
  a?: string
  }
  
  function fooBar123(opts: Opts ={}) {
    if(opts.a) {
    // ...
    } else {
    // ...
    }
  }
  
  // 不会跑出错误, 也不推断错误
  fooBar123(null)