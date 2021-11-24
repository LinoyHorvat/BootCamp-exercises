// Data structure implementation of Array, Queue, Stack, Linked List

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
    this.items = [];
  }
  push(value) {
    this.items[this.items.length] = value;
  }
  isEmpty() {
    this.items.length === 0 ? true : false;
  }
  pop() {
    if (!this.isEmpty) {
      let value = this.items[this.items.length];
      this.items = this.items.splice(-1);
      return value;
    } else return "Can't pop because stack is empty";
  }
}
const stack1 = new Stack();

// Queue
class Queue {
  constructor() {
    this.items = [];
  }
  isEmpty() {
    this.items.length === 0 ? true : false;
  }
  push(value) {
    this.items[this.items.length] = value;
  }
  pop() {
    if (!this.isEmpty) {
      let value = this.items[0];
      this.items = this.items.splice(1);
      return value;
    } else return "Can't pop because queue is empty";
  }
  isEmpty() {
    this.items.length === 0 ? true : false;
  }
}
const queue1 = new Queue();

//Array
class Array {
  constructor() {
    this.items = {};
    this.length = 0;
  }
  push(val) {
    this.items[this.length] = val;
    this.length++;
  }
  pop() {
    if (!this.isEmpty) {
      let value = this.items[this.length - 1];
      delete this.items[Object.keys(this.items)[this.length - 1]];
      array1.length--;
      return value;
    } else return "Can't pop because array is empty";
  }
  contains(x){
  }
  addToStart(x){}
  addToEnd(x){}
  isFull(){}
  removeFirst(x){}
}
const array1 = new Array();
// array1.push(2);
// array1.push(3);
// array1.push(4);
// console.log(array1);
// console.log(array1.pop());

// Linked List
class LinkedList {
}
class ListNode {

}
