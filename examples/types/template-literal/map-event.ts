// 表单数据
const Form = {
    firstName: "Saoirse",
    lastName: "Ronan",
    age: 26,
};
  
type Form = typeof Form;
type FormKey = keyof Form
// 定义监听表单字段变化的类型
type PropEventSource<Type> = {
    on(eventName: `${FormKey}Changed`, cb: (newValue: any) => void): void;
};

function makeWatchedObject<Form>(obj: Form): Form & PropEventSource<Type> {

}
const person = makeWatchedObject(Form);
  
person.on("firstNameChanged", () => {});

// 报错，没有这个的变量变化
person.on("firstNameChanged1", () => {});

 