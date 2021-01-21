type callback = (this: void, e: { type: string}) => void

function onChange(cb: callback) {
  cb({ type: 'change'})
}


onChange(function(a) {
  // 报错，无法在回调上使用 this.b 的属性
  let foo = this.b;
  console.log(a);
})

