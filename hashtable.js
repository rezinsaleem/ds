// class HashTable{
//   constructor(size){
//     this.items = new Array(size);
//     this.size = size
//   }

//   hash(key){
//     let  total = 0;
//     for(let i=0;i<key.length;i++){
//       total+= key.charCodeAt(i)
//     }
//     return total % this.size
//   }

//   set(key,value){
//     let index = this.hash(key)
//     this.items[index]=value;
//   }

//   get(key){
//     let index = this.hash(key)
//     return this.items[index]
//   }

//   remove(key){
//     let index = this.hash(key)
//     this.items[index]=undefined;
//   }

//   print(){
//     for(let i=0;i<this.items.length;i++){
//       if(this.items[i]){
//         console.log(i,this.items[i]);
//       }
//     }
//   }

// }

// const table = new HashTable(20)

// table.set("name","rezin")
// table.set("age","26")
// console.log(table.get("age"));
// table.remove("age")

// table.print()


class HashTable{
  constructor(size){
    this.table= []
    this.size = size
  }

  hash(key){
    let total =0
    for(let i=0;i<key.lengthl;i++){
      total+=key.charCodeAt(i)
    }
    return total%this.size
  }
  set(key,value){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(!bucket){
      this.table[index]=[[key,value]]
    }else{
      let sortedItems = bucket.find(item => item[0]===key)
      if(sortedItems){
        sortedItems[1]=value;
      }else{
        bucket.push([key,value])
      }
    }
  }
  get(key){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(bucket){
    let sameKey = bucket.find(item => item[0]===key)
    if(sameKey){
      return sameKey[1]
    }
  }
  return undefined;
  }
  remove(key){
    const index = this.hash(key)
    const bucket = this.table[index]
    if(bucket){
      let sameKey = bucket.find(item => item[0]===key)
      if(sameKey){
        bucket.splice(bucket.indexOf(sameKey),1)
      }
    }
  }
 print(){
  for(let i=0;i<this.table.length;i++){
    if(this.table[i]){
      console.log(i,this.table[i]);
    }
  }
 }
}
const table = new HashTable(20)

table.set("name","rezin")
table.set("anme","saleem")

table.set("age","26")
console.log(table.get("age"));
table.remove("age")

table.print()