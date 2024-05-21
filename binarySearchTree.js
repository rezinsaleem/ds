class Node{
  constructor(value){
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinarySearchTree{
  constructor(){
    this.root = null;
  }

  isEmpty(){
    return this.root == null
  }

 insertion(value){
  this.root = this.insert(this.root,value)
 }
 insert(root,value){
  if(!root){
    return new Node(value)
  }
  if(root.value>value){
    root.left =this.insert(root.left,value)
  }else{
    root.right = this.insert(root.right,value)
  }
  return root
 }

 min(root){
  if(!root.left){
    return root.value
  }
  return this.min(root.left)
 }

 max(root){
  if(!root.right){
    return root.value
  }
  return this.max(root.right)
 }

 search(root,value){
  if(!root){
    return false
  }
  if(root.value === value){
    return true
  }else if(root.value>value){
    return this.search(root.left,value)
  }else{
    return this.search(root.right,value)
  }
 }

 preOrder(root){
  if(root){
    console.log(root.value);
    this.preOrder(root.left)
    this.preOrder(root.right)
  }
 }
 inOrder(root){
  if(root){
    this.inOrder(root.left)
    console.log(root.value);
    this.inOrder(root.right)
  }
 }

 postOrder(root){
  if(root){
    this.postOrder(root.left)
    this.postOrder(root.right)
    console.log(root.value);
  }
 }

 levelOrder(){
  let queue ={}
  let rear = 0
  let front = 0
  queue[rear] = this.root
  rear++
  while(rear!==front){
    let curr = queue[front]
    delete queue[front]
    front++
    console.log(curr.value);
    if(curr.left){
      queue[rear] = curr.left
      rear++
    }
    if(curr.right){
      queue[rear] = curr.right
      rear++
    }
  }
 }
 
 delete(root,value){
  if(!root){
    return root
  }
  if(root.value > value){
    root.left = this.delete(root.left,value)
  }else if( root.value<value){
    root.right = this.delete(root.right,value)
  }else{
    if(!root.left){
      return root.right
    }
    if(!root.right){
      return root.left
    }
    root.value  = this.min(root.right)
    root.right = this.delete(root.right,root.value)
  }
  return root
 }

 height(root){
  if(!root){
    return 0
  }
 let left = this.height(root.left)
let  right = this.height(root.right)
 return Math.max(left,right)+1
 }

 findDepth(value){
  let depth = 0
  let curr= this.root
  while(curr){
    if(curr.value==value){
      return depth
    }
    if(curr.value>value){
      curr = curr.left
    }else{
      curr= curr.right
    }
    depth++
  }
  return null
 }

 ancestor(root,p,q){
  if(root.value > p && root.value >q){
    return this.ancestor(root.left,p,q)
  }else if(root.value < p && root.value < q){
    return this.ancestor(root.right,p,q)
  }else{
    return root.value
  }
 }
  
 closest(root,value){
  let close = root.value
  while(root){
    if(Math.abs(root.value - value) < Math.abs(close - value)){
       close = root.value
    }
    if(root.value>value){
      root = root.left
    }else{
      root = root.right
    }
  }
  return close
 }

 findPath(value){
  let arr=[]
  let curr = this.root
  while(curr){
    arr.push(curr.value)
    if(curr.value==value){
      arr.pop()
      return arr
    }
    if(curr.value>value){
      curr = curr.left
    }else{
      curr= curr.right
    }
  }
 }

 isValid(root){
  if(!root){
    return true
  }
  if(root.left && this.max(root.left)>root.value){
    return false
  }
  if(root.right && this.min(root.right)<root.value){
    return false
  }
  if(!this.isValid(root.left) || !this.isValid(root.right)){
    return false
  }
  return true
 }

}

const bst  = new BinarySearchTree()

bst.insertion(33)
bst.insertion(56)
bst.insertion(30)
bst.insertion(37)
bst.insertion(26)
bst.insertion(29)
bst.insertion(10)
bst.insertion(40)
bst.insertion(31)
bst.insertion(58)
bst.insertion(38)
console.log(bst.max(bst.root));
console.log(bst.min(bst.root));
// bst.delete(bst.root,10)
console.log(bst.search(bst.root,10));
console.log(bst.findPath(38));

console.log(bst.isValid(bst.root));
// console.log(bst.height(bst.root));
// console.log(bst.findDepth(37));
 console.log(bst.closest(bst.root,28));

// bst.levelOrder()
// bst.delete(bst.root,40)
// bst.delete(bst.root,31)
// bst.delete(bst.root,38)
// bst.delete(bst.root,10)
// bst.delete(bst.root,29)
// bst.delete(bst.root,26)
// bst.delete(bst.root,37)
// bst.delete(bst.root,100)



// bst.inOrder(bst.root)

