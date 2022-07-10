const str="wowu";

const palindrome=(str)=>{
  //method 1
  //   let str1='';
  //   for(let i=str.length-1;i>=0;i--){
  //     str1+=str.charAt(i)
  //   }
  // if(str===str1){
  //   return true;
  // }else{
  //   return false;
  // }
  
  //method2
  for(let i=0,j=str.length-1;i<str.length/2;i++,j--){
    if(str.charAt(i)!==str.charAt(j)){
      return false
    }
  }
  return true;
}
const isPalindrome=palindrome(str);
console.log(isPalindrome)