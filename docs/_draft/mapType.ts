type MapType = {
   'A': (val: {a: string} ) => void,
   'B': (val: {b: string} ) => void,
   'C': (val: {c: string} ) => void
}
type EventNames = keyof MapType
function onChange (name: EventNames , val: MapType[typeof name]) :void {
}


onChange('A',(res) => {
   console.log(res.a)
})
onChange('B',(res) => {
   console.log(res.b)
})
onChange('C',(res) => {
   console.log(res.c)
})
