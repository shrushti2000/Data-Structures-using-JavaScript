const arr=[10,20,30,40,50,60,70];
console.log(arr)
const reverseArray=(arr)=>{
  
  for(let i=0,j=arr.length-1;i<arr.length/2;i++,j--){
   let temp=arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
    }
}
reverseArray(arr);
console.log(arr)