
const decimalToBinary = (decimal) => {
    //checks if the decimal value is zero
    //if is not zero I remove the first digit (character) from the result
    return( decimal === 0 ? 0 : (decimalToBinary(Math.floor(decimal/2)) + (decimal%2).toString()).toString().replace(/^0+/, '') );
}

console.log(decimalToBinary(8));