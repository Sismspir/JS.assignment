// creates "createBase function with a default value base = 0"
function createBase(base=0) {
    var mainBase = base;
    function addNum(num) {
        let newBase = mainBase;
        return(num + newBase);    
    }
    return(addNum);    
}

// assigns addNum (with base = 6) to addSix variable
var addSix = createBase(6);

// prints the result
console.log(addSix(10));
console.log(addSix(21));