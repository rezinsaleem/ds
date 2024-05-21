class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

class LinkedList {

  constructor() {
    this.head = null
    this.size = 0
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size
  }

  prepend(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head
      this.head = node;
    }
    this.size++
  }

  append(value) {
    const node = new Node(value)
    if (list.isEmpty()) {
      this.head = node
    } else {
      let prev = this.head
      while (prev.next) {
        prev = prev.next
      }
      prev.next = node;
    }
    this.size++
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      return
    }
    if (index === 0) {
      this.prepend(value)
    } else {
      const node = new Node(value)
      let prev = this.head
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next
      }
      node.next = prev.next
      prev.next = node
      this.size++
    }
  }
  
  removefromend(){
    if(this.size==0) return null;
    if(this.size==1){
      this.head = null;
      this.size--
      return
    }
    let prev= this.head
    while( prev.next.next){
      prev=prev.next
    }
    prev.next=null
    this.size--
  }

  removefromfirst(){
    if(this.size==0){
      return null
    }
    if(this.size==1){
      this.head=null
    }else{ 
    this.head = this.head.next;
    }
    this.size--
  }


  removeFrom(index){
    if(index<0 || index>this.size){
      return null;
    }
    let removedNode;
    if(index===0){
      removedNode=this.head;
      this.head = this.head.next;
    }else{
      let prev = this.head
      for(let i=0;i<index-1;i++){
        prev=prev.next;
      }
      removedNode=prev.next;
      prev.next=removedNode.next;
    }
    this.size--
    return removedNode.value;
  }

  removeValue(value){
    if(this.isEmpty()){
      return null;
    }
    if(this.head.value == value){
      this.head =this.head.next;
      this.size --
      return value
    }
    let prev = this.head;
    while(prev.next && prev.next.value!==value){
      prev = prev.next
    }
    if(prev.next){
      let removedNode = prev.next;
      prev.next =removedNode.next;
      this.size--
      return value
    }else{
      return null
    } 
  }

  search(value){
    if(this.isEmpty()){
      return -1
    }
    let i=0;
    let curr = this.head;
    while(curr){
      if(curr.value == value){
        return i
      }
      curr= curr.next;
      i++;
    }
    return -1;
  }
  
  reverse(){
    let prev = null;
    let curr =this.head;
    while(curr){
      let next= curr.next;
      curr.next = prev;
      prev=curr;
      curr=next;
    }
    this.head = prev
  }

  recursiveReverse(){
    let prev = null;
    let curr =this.head;
    function rec(curr){
      if(curr==null){
        return prev
      }
      let next= curr.next;
      curr.next = prev;
      prev=curr;
      return rec(next)
    }
 
    rec(curr)
    this.head=prev
  }

  middle(){
    let slow =this.head;
    let fast = this.head;
    while(fast.next && fast.next.next){
      fast = fast.next.next
      slow= slow.next
    }
    return slow.value
  }


  display() {
    if (list.isEmpty()) {
      console.log("the list is empty");
    } else {
      let curr = this.head;
      let listvalues = ""
      while (curr) {
        listvalues += `${curr.value} `
        curr = curr.next
      }
      console.log(listvalues);
    }
  }

}

const list = new LinkedList()


list.display()
// list.prepend(8)
// list.display()
list.prepend(10)
// list.prepend(28)
// list.append(38)
// list.display()
console.log("list is empty?", list.isEmpty());
console.log("list size", list.getSize());

list.insert(10, 0)
//list.display()
list.insert(20, 0)
//list.display()
list.insert(30, 1)
//list.display()
list.insert(40, 2)
//list.display()
list.insert(50, 4)
// list.display()
// list.reverse()
// list.display()

// console.log(list.removeFrom(10));
// list.display()
// console.log(list.removeFrom(2));
// list.display()
// console.log(list.removeFrom(0));
// list.display()

// console.log(list.removeValue(10));
// list.display()
// console.log(list.removeValue(2));
// list.display()
// console.log(list.removeValue(20));
// list.display()
// console.log("list size", list.getSize());
// console.log(list.search(4));
// console.log(list.search(40));
list.display()
list.recursiveReverse()
list.display()

