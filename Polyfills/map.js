const arr=[2,3,4,5,6,8,9];
Array.prototype.myMap=function(cb){
  let temp=[];
  for(let i=0;i<this.length;i++){
    temp.push(cb(i,this[i],this))
  }
  return temp;
}

const newArr=arr.myMap((i,item,arr)=>item*2 );
console.log(newArr)
