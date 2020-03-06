type BallSize = {
  name: string;
  size: string;
};
type BallColor = {
  name: string;
  color: string;
};

// 定义一个同时包含名字,尺寸,类型属性的对象类型
type BallSizeAndColor = BallSize & BallColor;

// 变量必须同时包含 size 和 color 属性
let ball: BallSizeAndColor;

// 合法
ball = {
  name: 'tennis',
  size: 'small',
  color: 'white'
};

// 报错,  缺少 color 属性
ball = {
  name: 'basketball',
  size: 'big'
};

// 报错, 缺少 size 属性
ball = {
  name: 'pingpong',
  color: 'yellow'
};
