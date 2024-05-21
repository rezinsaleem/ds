// function fibonacci (n){
//   arr = [0,1]
//  for(i=2;i<n;i++){
//   arr[i]=arr[i-1]+arr[i-2]
//  }
//  console.log(arr);
//  return arr
// }

// fibonacci(7)

// function factorial (n){
//   res =1;
//   for(i=2;i<=n;i++){
//      res*=i
//   }
//   console.log(res)
// }
// factorial(5)


// function prime (n){
//   if(n<2){
//     return false;
//   }
//   for(i=2;i<=n/2;i++){  //i<=Math.sqrt(n) then time complexity will be O(sqrt(n))
//     if(n%i === 0) 
//     return false;
//   }
//   return true;
// }

// console.log(prime(6))
//O(logn)

// function poweroftwo(n){
//   for(i=0;i<=n/2;i++){
//     if(n===Math.pow(2,i))
//     return true;
//   }
//   return false;
// }

// console.log(poweroftwo(4));

// function powertwo(n){
//   if(n<1){
//     return false;
//   } 
//   while(n>1){
//     if(n%2!==0){
//       return false;
//     }
//     n= n/2;
//   }
//   return true;
// }

// console.log(powertwo(6));


// function powertwobiwise(n){
//   if(n<1) return false;
//   return (n & (n-1)) === 0;
// }

// console.log(powertwobiwise(7));


function binarySearch(arr,t){
  let right= arr.length-1
  let  left = 0
  while(left <=right){
    let mid= Math.floor((left+right)/2)
    if(t===arr[mid]){
      return mid
    }
    if(t<arr[mid]){
      right=mid-1
    }else{
      left=left+1
    }
  }
}

let array =[1,2,3,4,5,6,88,99]
target = 88

console.log(binarySearch(array,target));