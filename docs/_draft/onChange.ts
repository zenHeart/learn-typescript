type EventName = 'A' |'B' |'C'
type callbackA =  (val: {a: string} ) => void;
type callbackB =  (val: {b: string} ) => void;
type callbackC =  (val: {c: string} ) => void;

type EventCb<T> = T extends 'A' ? callbackA : T extends 'B' ? callbackB :callbackC
function onChange<T>  (name: T, val: EventCb<T>) :void {

}
onChange<'A'>('A',(res) => {
   console.log(res.a)
})
onChange<'B'>('B',(res) => {
   console.log(res.b)
})
onChange<'C'>('C',(res) => {
   console.log(res.c)
})