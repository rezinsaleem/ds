// class Heap {
//   constructor() {
//       this.heap = []
//   }
//   getParent(i) {
//       return Math.floor((i - 1) / 2)
//   }
//   getLeft(i) {
//       return (2 * i) + 1
//   }
//   getRight(i) {
//       return (2 * i) + 2
//   }
//   swap(p, q) {
//       [this.heap[p], this.heap[q]] = [this.heap[q], this.heap[p]]
//   }
//   buildHeap(arr) {
//       this.heap = arr
//       let endIndex = this.heap.length - 1   
//       for(let i = this.getParent(endIndex);i >= 0; i--) {
//           this.heapifyDown(i,endIndex)
//       }
//   }
//   heapifyDown(i,endIndex) {
//       let leftIndex = this.getLeft(i)
//       let indexToShift;
//       while(leftIndex <= endIndex) {
//           let rightIndex = this.getRight(i)
//           if(rightIndex <= endIndex && this.heap[rightIndex] < this.heap[leftIndex]) {
//               indexToShift = rightIndex
//           } else {
//               indexToShift = leftIndex
//           }
//           if(this.heap[i] > this.heap[indexToShift]) {
//               this.swap(i, indexToShift)
//               i = indexToShift
//               leftIndex = this.getLeft(i)
//           } else {
//               return
//           }
//       }
//   }
// }


class Heap{
    constructor(){
        this.heap = []
    }

    getParent(i){
        return Math.floor((i-1)/2)
    }
    getLeft(i){
        return (2*i) +1
    }
    getRight(i){
        return (2*i)+2
    }
    swap(i1,i2){
        [this.heap[i1],this.heap[i2]]=[this.heap[i2],this.heap[i1]]
    }
    buildHeap(arr){
        this.heap = arr  
        for(let  i = this.getParent(this.heap.length-1);i>=0;i--){
            this.heapifyDown(i)
        }
        console.log(this.heap);
    }
    heapifyDown(i) {
        let largest = i;
        const left = this.getLeft(i);
        const right = this.getRight(i);
        const n = this.heap.length;
    
        if (left < n && this.heap[left] > this.heap[largest]) {
            largest = left;
        }
    
        if (right < n && this.heap[right] > this.heap[largest]) {
            largest = right;
        }
    
        if (largest !== i) {
            this.swap(i, largest);
            this.heapifyDown(largest);
        }
    }
    
  insert(value){
    this.heap.push(value)
    this.heapifyUp(this.heap.length-1)
  }
  heapifyUp(i){
  while(this.heap[i]>this.heap[this.getParent(i)]){
    this.swap(i,this.getParent(i))
    i=this.getParent(i)
  }
  }

  remove(){
    
    if(this.heap.length ==0){
        return
    }
    let val = this.heap[0]
    this.swap(0,this.heap.length-1)
    this.heap.pop()
    this.heapifyDown(0)
    return val
  }

  heapSort(){
    let sorted = [];
    while(this.heap.length>0){
       let elem  = this.remove()
       sorted.push(elem)
    }
    return sorted
  }
}

const heapp = new Heap()
heapp.buildHeap([12,4,33,5,66,7,78])
heapp.insert(6)


console.log(heapp.heap);
heapp.remove()
console.log(heapp.heap);
console.log(heapp.heapSort());

function HeapSort(arr){
    for(let i = Math.floor(arr.length/2)-1 ; i>=0;i--){
        minheap(arr,arr.length,i)
    }

    function minheap(arr,n,i){
        let largest = i;
        let left  = 2*i+1;
        let right  = 2*i+2;

        if(left < n && arr[left]>arr[largest]){
            largest = left;
        }
        if(right < n && arr[right]>arr[largest]){
            largest = right;
        }
        if(largest !== i){
            [arr[i],arr[largest]]=[arr[largest],arr[i]]
            minheap(arr,n,largest)
        }
    }
    for(let i=arr.length -1;i>=0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        minheap(arr,i,0)
    }
    return arr
}

// console.log(HeapSort([12,4,33,5,66,7,78]));
