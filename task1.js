// creates two stacks in array form
let stack1 = [];
let stack2 = [];

// creates the enqueue function
function enqueue(element) {
    let newelement = element;
    stack1.push(newelement);
    console.log(` ${ newelement } inserted in the first stack `)
}


// creates the dequeue function
function dequeue() { 
    if (stack1.length === 0) {
        console.log('No items are left in stack2') 
    } else  {
        let popedItem = stack1.pop();
        stack2.push(popedItem);
        console.log(`${popedItem} removed from the first stack "${stack1}" and pushed in the second stack "${stack2}" `);
    }

}

enqueue("A");
enqueue("B");
enqueue("C");
dequeue();
dequeue();
