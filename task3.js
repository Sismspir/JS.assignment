class Node {
  constructor(head,next) {
    this.head = head;
    this.next = next;
  } 
}

merge = (L1, L2) => {
  
  // create new linked list pointer
  var L3 = new Node(null, null);
  var temp = L3;
 
  // while both linked lists are not empty
  while (L1 !== null && L2 !== null) {
    if (L1.head <= L2.head) { 
      temp.next = L1;
      L1 = L1.next;
    } else {
      temp.next = L2;
      L2 = L2.next;
    }
    // console.log(temp.next,L3.next)
    temp = temp.next;
    
  }
  
  // once we reach end of a linked list, append the other 
  // list because we know it is already sorted
  if (L1 === null) { temp.next = L2; }
  if (L2 === null) { temp.next = L1; }
  
  // return the sorted linked list
  return L3;
  
}

// create first linked list: 1 -> 3 -> 10
var n3 = new Node(10, null);
var n2 = new Node(3, n3);
var n1 = new Node(1, n2);
var L1 = n1; 

// create second linked list: 5 -> 6 -> 9
var n6 = new Node(9, null);
var n5 = new Node(6, n6);
var n4 = new Node(5, n5);
var L2 = n4; 

// prin the sorted linked list
ele = merge(L1,L2);
while (ele !== null) {
  console.log(ele.next);
  ele = ele.next;
}
