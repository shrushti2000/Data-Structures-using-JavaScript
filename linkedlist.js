class List{
  constructor(data){
    this.head={
      value:data,
      next:null
    }
    this.tail=this.head;
    this.size=1;
  }
  appendNode(data){
    let newNode={
      value:data,
      next:null
      
    }
    this.tail.next=newNode;
    this.tail=newNode;
    this.size+=1;
  }
  traverese(){
    let counter=1;
    let currNode=this.head;
    while(counter<=this.size){
      console.log(currNode.value);
      currNode=currNode.next;
      counter=counter+1;
    }
  }
  
}
let list=new List(200);
list.appendNode(300);
list.appendNode(400);
list.appendNode(500);
list.appendNode(600);
list.traverese()

console.log(list)
