import LinkedList from "./linkedList.js"

const list = new LinkedList

list.prepend('third')
list.prepend('second')
list.prepend('first')
list.append('fourth')
list.append('lastone')

console.log(list.size()) // Returns '5'
console.log(list.head()) // Returns {value: first, nextNode: Node}
console.log(list.tail()) // Returns {value: lastone, nextNode: null}
console.log(list.at(-1)) // Returns 'Invalid Index'
console.log(list.at(3)) // Returns {value: fourth, nextNode: Node}
console.log(list.pop()) // Returns {value: fourth, nextNode: null} the new last element of the list
console.log(list.contains('fourth')) // Returns 'true'
console.log(list.contains('lastone')) // Returns 'false'
console.log(list.find('third')) // Returns '2'
console.log(list.toString()) // Returns ( first ) --> ( second ) --> ( third ) --> ( fourth ) --> null
list.insertAt('second again', 2)
console.log(list.toString()) // Returns ( first ) --> ( second ) --> ( second again ) --> ( third ) --> ( fourth ) --> null
list.removeAt(2)
console.log(list.toString()) // Returns ( first ) --> ( second ) --> ( third ) --> ( fourth ) --> null
list.insertAt('zero', 0)
console.log(list.toString()) // Returns ( zero ) --> ( first ) --> ( second ) --> ( third ) --> ( fourth ) --> null