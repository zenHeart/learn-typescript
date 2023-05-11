type PairType = [unknown ,unknown]
function zip(arr1: unknown[], arr2: unknown[]): PairType[] {
   let newArr: PairType[] = [];
   for(let i in arr1) {
      newArr.push([arr1[i],arr2[i]])
   }
   return newArr
}
let res = zip([1,2,3], [4,5,6])
console.log(res)