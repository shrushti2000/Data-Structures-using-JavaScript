const str="wowu";

const reverseString=(str)=>{
 // method 1
 //    let str1='';
 //    for(let i=str.length-1;i>=0;i--){
 //      str1+=str.charAt(i)
 //    }
 // return str1;
  
  //method2
  const charArr=str.split('')
  
   
  for(let i=0,j=charArr.length-1;i<charArr.length/2;i++,j--){
   let temp=charArr[i];
    charArr[i]=charArr[j];
    charArr[j]=temp;
    }
  return  charArr.join('');
  
}
const reveredString=reverseString(str);
console.log(reveredString)