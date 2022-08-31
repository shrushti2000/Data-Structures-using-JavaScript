let stack=[];
let stacklength=stack.length;
let maxlength=5;

function push(x){
 if(stacklength<maxlength){
    stack[stacklength]=x;
  stacklength=stacklength+1;
 }
}

function pop(){
  if(stacklength>0){
    stacklength=stacklength-1;
stack.length=stacklength;
  }
}

push(10);
push(20);
pop()
push(30);
push(40);
push(50);
pop()
console.log(stack)

