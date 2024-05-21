// class Stack {
//   constructor(){
//   this.items = [];
//   }

//   push(element){
//      return this.items.push(element)
//   }

//   pop(){
//    return this.items.pop()
//   }

//   peek (){
//    return this.items[this.items.length-1]
//   }

//   size(){
//     return this.items.length
//   }

//   print(){
//     console.log(this.items.toString());
//   }

// }
// const stack = new Stack()
// stack.push(21)
// stack.push(133)
// stack.push(93)
// stack.push(22)
// stack.pop()
// stack.pop()
// console.log(stack.peek());
// console.log(stack.size());
// stack.print()


// class Stack{
//   constructor() {
//     this.stack = {}
//     this.length = 0
//   }

//   push(value){
//     this.stack[this.length]=value;
//     this.length++
//   }

//   pop(){
//    delete this.stack[this.length-1]
//    this.length--
//   }

//   peek(){
//     return this.stack[this.length-1]
//   }
//   size(){
//     return this.length
//   }
//   print(){
//     console.log(this.stack);
//   }
// }

// const stack = new Stack()
// stack.push(21)
// stack.push(133)
// stack.push(93)
// stack.push(22)
// stack.print()
// stack.pop()
// stack.pop()
// console.log(stack.peek());
// console.log(stack.size());
// stack.print()


class Node{
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.size = 0;
  }

  push(value){
    const node = new Node(value)
      node.next = this.head;
      this.head = node;
      this.size++;
    }
 
    pop(){
      if(this.size==0) return null
      this.head = this.head.next
      this.size--
    }

    peek(){
      return this.head.value
    }

    getSize(){
      return this.size
    }

   
    display(){
      let curr = this.head
      let listValues = ""
      while(curr){
        listValues+=`${curr.value} `
        console.log(curr.value);
        curr=curr.next;
      }
      console.log(listValues);
    }
}

const list = new LinkedList()

list.push(3)
list.push(8)
console.log(list.peek());
list.pop()
list.pop()
console.log(list.getSize());
list.display()
