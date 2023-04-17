const { NotImplementedError } = require('../extensions/index.js');
let st = []
/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  
  push( element ) {
    st.push(element) ;
  }

  pop() {
    if( st.length == 0 )
      return undefined ;
    else {
      let st_pop =  st[ st.length - 1 ] ;
      st.splice( st.length - 1, 1 ) ;
      return st_pop ; 
    }
  }

  peek(){
    return st[st.length - 1] ;
  }
}

module.exports = {
  Stack
};
