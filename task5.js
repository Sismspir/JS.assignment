const isPalindrome = (string) => {
    string = string.replaceAll(' ','');
    const length = string.length;
    for (let i=0; i<=length-i; i++) {
        if (string[i].toLowerCase() !== string[length-i-1].toLowerCase()) {
            return false;
        }
    }
    return true
}

console.log(isPalindrome("rAc !!!tecaR"));