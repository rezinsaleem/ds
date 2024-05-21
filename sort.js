function bubbleSort(ar){
  let swapped;
  do {
    swapped =false;
    for(let i=0;i<ar.length-1;i++){
      if(ar[i]>ar[i+1]){
        [ar[i],ar[i+1]] = [ar[i+1],ar[i]]
        swapped = true;
      }
    }
  } while (swapped);
  return ar;
}

function selectionSort(ar){
  for(i=0;i<ar.length-1;i++){
    let min = i
   for(let j=i+1;j<ar.length;j++){
      if(ar[j]<ar[min]){
        min=j
    }
  }
  [ar[i],ar[min]]=[ar[min],ar[i]]
}
  return ar;
}


function insertionSort(ar){
  for(let i=1;i<ar.length;i++){
    let num = ar[i]
    let j = i-1;
    while(j>=0 && ar[j]>num){
      ar[j+1]=ar[j];
      j= j-1
    }
  ar[j+1] = num;
  }
  return ar;
}

function quickSort(ar){
  if(ar.length<2){
    return ar
  }
  let pivot = ar[ar.length-1];
  let left =[]
  let right = []
  for(i=0;i<ar.length-1;i++){
    if(ar[i]>pivot){
      right.push(ar[i])
    }else{
      left.push(ar[i])
    }
  }
  return [...quickSort(left),pivot,...quickSort(right)]
}

function mergeSort(ar){
  if(ar.length<2){
    return ar
  }
  let mid = Math.floor(ar.length/2)
  let left = ar.slice(0,mid);
  let right = ar.slice(mid);
  return merge(mergeSort(left),mergeSort(right))
}

function merge(left,right){
  let sorted =[]
  while(left.length && right.length){
    if(left[0]<=right[0]){
      sorted.push(left.shift())
    }else{
      sorted.push(right.shift())
    }
  }
  return [...sorted,...left,...right]
}

function recBub(arr){
  
  swapped = false;
  for(i=0;i<arr.length-1;i++){
      if(arr[i]>arr[i+1]){
    [arr[i],arr[i+1]]=[arr[i+1],arr[i]]
    swapped = true;
  }

  }
  if(swapped){
    return recBub(arr)
  }else{
    return arr
  }
}

console.log("bubblesort : ",bubbleSort([3, 23, 1, -55, -5, 43, 6, 8, 8, 7, 0, -5]));
console.log("selectionsort : ",selectionSort([3, 23, 1, -55, -5, 43, 6, 8, 8, 7, 0, -5]));
console.log("insertionsort : ",insertionSort([3, 23, 1, -55, -5, 43, 6, 8, 8, 7, 0, -5]));
console.log("quicksort : ",quickSort([3, 23, 1, -55, -5, 43, 6, 8, 8, 7, 0, -5]));
console.log("mergesort : ",mergeSort([3, 23, 1, -55, -5, 43, 6, 8, 8, 7, 0, -5]));