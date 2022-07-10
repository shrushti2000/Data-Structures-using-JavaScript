const arr=[25,30,45,100,1,90,3,7];
const findLargestElement=(arr)=>{
  let maxIndex;
  let maxValue=arr[0];
  for(let i=1;i<arr.length;i++){
    arr[i]>maxValue ? maxValue=arr[i] : maxValue=maxValue;
  }
  return maxValue;
}
const maxElement=findLargestElement(arr);
console.log(maxElement);