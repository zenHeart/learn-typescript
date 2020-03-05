// 浏览器端  addEventListener 的类型函数申明示例
// 定义事件回调类型,参数为对象,无返回值
type EventCallback = (event: object) => void;
// 定义绑定监听器的函数,参数为事件名和回调函数,无返回值
type addEventListener = (eventName: string, cb: EventCallback) => void;

// node 回调模式的申明示例
// 申明函数类型第一个参数为错误对象,第二个参数为实际数据,无返回值
type NodeCallBack = (err: Error, data: Object) => void;
// 申明一个 nodeApi 函数,输入为数据和回调,无返回值
type nodeApi = (data: Object, cb: NodeCallBack) => void;
