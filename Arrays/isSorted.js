const arr=[20,40,50,60,90,100,2]

const isSorted=(arr)=>{
  for(let i=0;i<arr.length-1;i++){
    if(arr[i+1]<arr[i]){
      return false;
    }
    
  }
  return true;
}
const isArraySorted=isSorted(arr);
console.log(isArraySorted)