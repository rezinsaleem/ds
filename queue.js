// class Queue{
//   constructor(){
//     this.items= []
//   }

//   enqueue(element){
//     this.items.push(element)
//   }
//   dequeue(){
//     this.items.shift()
//   }
//   peek(){
//     if(this.size!==0){
//       console.log(this.items[0]);
//     }
//     return null
//   }
//   size(){
//     console.log(this.items.length);
//   }
//   print(){
//     console.log(this.items.toString());
//   }
// }

class Queue{
  constructor() {
    this.items ={}
    this.rear=0
    this.front = 0
  }
  enqueue(element){
    this.items[this.rear]=element;
    this.rear++
  }
  dequeue(){
   if((this.rear - this.front)>0){
    delete this.items[this.front]
    this.front++
   }
  }
  size(){
    console.log(this.rear - this.front);
  }
  peek(){
    console.log(this.items[this.front]);
  }
  print(){
    console.log(this.items);
  }
}

const queue = new Queue()
queue.enqueue(10)
queue.dequeue()
queue.dequeue()

queue.print()
queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.enqueue(40)
queue.print()
queue.dequeue()
queue.size()
queue.peek()
queue.print()




