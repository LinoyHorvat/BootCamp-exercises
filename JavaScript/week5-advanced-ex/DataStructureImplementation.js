// Data structure implementation
//  Array, Queue, Stack, Linked List

// push(x) 
// pop(x)
// contains(x) - is an element inside the data structure
// addToStart(x)
// addToEnd(x)
// isEmpty()
// isFull()
// removeFirst(x) - removes first element that equals x

// Stack
class Stack {
  constructor() {
    this.items = [] ;
  } 
  push(value) {
    this.items[this.items.length] = value
  }
  pop(){
    let value = this.items[this.items.length] ;
    this.items = this.items.splice(-1)
    return value
  }
  isEmpty(){
    this.items.length === 0 ? true : false ; 
  }
}
const stack1 = new Stack(); 

// Queue
class Queue {
  constructor() {
    this.items = [] ;
  } 
  isEmpty(){
    this.items.length === 0 ? true : false ; 
  }
  push(value) {
    this.items[this.items.length] = value
  }
  pop(){
    let value = this.items[0] ;
    this.items = this.items.splice(1)
    return value
  }
}
const queue1 = new Queue(); 

//Array







