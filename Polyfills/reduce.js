const arr=[2,5,3];
Array.prototype.myReduce=function(cb,initialValue){
  var accumulator=initialValue;
  for(let i=0;i<this.length;i++){
    accumulator=accumulator?         
    cb(accumulator,this[i],i,this):this[i]
  }
  return accumulator;
}

const sum=arr.myReduce((acc,curr,i,arr)=>{
  return acc+curr;
},0)
console.log(sum)
