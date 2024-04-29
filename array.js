// let arr = [10, 1, 2, 13, 4, 11, 6]

// function asdf(ar, t) {
//   for (i = 0; i < ar.length; i++) {
//     for (j = i; j < ar.length; j++) {
//       if (ar[i] + ar[j] == t) {
//         return new Array(ar[i], ar[j])
//       } 
//     }
//   }
//   return "no matches found"
// }

// console.log(asdf(arr, 33));


// function targetSum(ar, target) {
//   let mySet = new Set();
//   for (i = 0; i < ar.length; i++) {
//     match = target - ar[i];
//     if (mySet.has(match))
//       return [ar[i], match]
//     else
//       mySet.add(ar[i]);
//   }
//   return "no match found"
// }

// console.log(targetSum(arr, 10));
//here time complexity and space complexity is O(n)



// function sort(ar){
//   for(i=0;i<ar.length-1;i++){
//     for(j=i+1;j<ar.length;j++){
//       smallest=ar[i]
//       temp=0;
//       if(smallest>ar[j]){
//         temp=ar[i]
//         ar[i]=ar[j]
//         ar[j]=temp;
//       }
//     }
//   }
//   console.log(ar)
// }

// sort(arr)


// let arr = [1, 4, 5, 1, 6, 7, 19, 1, 3, 1]

// function ghj(ar, t) {
//   for (i = 0, j = ar.length - 1; i < j;) {
//     if (ar[i] == t && ar[j] !== t) {
//       [ar[j], ar[i]] = [ar[i], ar[j]]
//       i++;
//       j--;
//     } else {
//       if (ar[i] !== t) i++;
//       if (ar[j] == t) j--;
//     }
//   }
//   return ar;
// }
// console.log(ghj(arr, 1))


// function jkl(ar, t) {
//   for (i = 0, j = ar.length - 1; i < j;) {
//     if (ar[i] == t) {
//       [ar[j], ar[i]] = [ar[i], ar[j]]
//       j--;
//     } else {
//       i++;
//     }

//   }

  
//   return ar;
// }

// console.log("2nd method", jkl(arr, 1))
