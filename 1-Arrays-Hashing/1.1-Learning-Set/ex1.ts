const mySet = new Set<number>
mySet.add(1)
mySet.add(2)

// adding a vaule
mySet.add(3)
mySet.add(1)//

console.log(mySet)


//checking the values
console.log(mySet.has(1))
console.log(mySet.has(4))

// remove 
const removeNumber2= mySet.delete(2)
console.log(removeNumber2)
console.log(mySet)