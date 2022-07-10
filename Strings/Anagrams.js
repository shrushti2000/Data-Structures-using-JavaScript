const str1="listen";
const str2="silent";

const anagrams=(str1,str2)=>{
  // let count=[];
  // count.length=256;
  // count.fill(0);
  // console.log(count)
  // for(let i=0;i<str1.length;i++){
  //   let c=count[str1.charAt(i)];
  //   console.log(c)
  //   count[str1.charAt(i)]=c;
  // }
  // console.log(count)
  //  for(let i=0;i<str2.length;i++){
  //   count[str2.charAt(i)]--;
  // }
  
  // let flag=0;
  // for(let i=0;i<str1.length;i++){
  //   count[str1.charAt(i)]!=0 ? flag=1: flag=0;
  // }
  // if(flag==0){
  //   return true
  // }
  // else{
  //   return false
  // }
  let charStr1=str1.split('');
  let charStr2=str2.split('');
  charStr1.sort();
  charStr2.sort();
  let s1=charStr1.join('')
  let s2=charStr2.join('')
  if(s1===s2){
    return true
  }
  else{
    return false
  }
  
}
const isAnagram=anagrams(str1,str2);
console.log(isAnagram)
