var displayedNumber = document.getElementById("display")
console.log(displayedNumber.innerHTML);

let arr = []
let numberPressed;
function press(numberPressed) {
    displayedNumber.innerHTML += numberPressed
    console.log(numberPressed);
    arr.push(numberPressed);
    console.log(arr);

}

function setOP(operator) {
    displayedNumber.innerHTML += operator
    arr.push(operator);

}

function calculate() {
    let firstNum = arr[0]
    let operatorrr = arr[1]
    let secondNum = arr[2]
    let result = firstNum +  operatorrr + secondNum
    console.log(result);
}


