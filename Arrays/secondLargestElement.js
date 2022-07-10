const arr=[20,30,10,10,96,3,55,84,4];

const findSecondLargestElement=(arr)=>{
  let largest=arr[0];
  let secondLargest=largest;
  for(let i=1;i<arr.length;i++){
    if(arr[i]>largest){
       secondLargest=largest;
        largest=arr[i];
     }else{
      if(arr[i]>secondLargest){
        secondLargest=arr[i];
      }
    }
    }
   return secondLargest;
  }
 

const secondlargestelement=findSecondLargestElement(arr)
console.log(secondlargestelement)