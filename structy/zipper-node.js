// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }

const zipperLists = (head1, head2) => {
  // pseudo
  // two pointers
    // current1 for head1
    // current2 for head2
  // tail
    // the current node of the newly zippered list
  // count
    // if even, take from head1 (current1)
    // if odd, take from head2 (current2)
  
  // let tail = current1;
  // this should actually be
  let tail = head1;
  
  // let current1 = head1;
  // this should actually be
  let current1 = head1.next
  // because we've set tail to head1
  
  let current2 = head2;
  let count = 0;
  
  // correct the first time:
    // pattern + node value reassignment logic + counter -- 
  // messed up :
    // check counter even conditional
    // tail reassignment outside of the conditional
  while (current1 !== null && current2 !== null){
    if (count % 2 === 0){
      // counter is even 
      // take from head2
      tail.next = current2
      current2 = current2.next
      // console.log(`contents of current1 are ${current2.val} and tail are ${tail.val}`)
      // count += 1
    } else {
      // counter is odd -> take from head2
      tail.next = current1
      current1 = current1.next
      // console.log(`contents of current1 are ${current1.val} and tail are ${tail.val}`)
      // count += 1
    }
    tail = tail.next
    count += 1
  }
  
  // return tail;
  return head1;
  
};

module.exports = {
  zipperLists,
};
