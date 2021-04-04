/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
     // intialized an array called stack 
    var stack = []; 
    // creating an object called pairs that represents each character based on styled bracket
    const pairs = {
        '}':'{',
        ']':'[',
        ')':'(',
    }
    
  // the for...of statement creates a loop iterating over iterable objects
    for (const v of strs) {
    // created an a varible to track if brackets are open 
    const open = pairs[v] 
    // conditiontal that if a bracket is open 
    if (open) {
        console.log(open)
        // if the stack removes the most recently added element is not equal to open return boolean
        // !== (is not) compared two variables and but it ignores the datatype of variable.
        if (stack.pop() !== open) {
        // return boolean false 
        return false
        }
    } else {
        // creates the new element of the collection 
        stack.push(v)
        console.log(v)
    }
    }
    return stack.length <= 0
};