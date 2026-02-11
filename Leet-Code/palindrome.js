let c = 1000021
function isPalindrome(x) {
    let arr = x.toString().split("")
    let length = arr.length  //7

    for (let i = 0; i < Math.floor(arr.length / 2); i++) {  //3
        if (arr[i] !== arr[length - 1 - i]) {
            return false // 1 // 5
        }
        return true
    }
}

console.log(isPalindrome(c));
