
function basicOp(symbol, num1, num2){
    switch(symbol){
        case '+':
            return num1+num2;
        case '-':
            return num1-num2;
        case '*':
            return num1*num2;
        case '/':
            return num1/num2;
        default:
            return " ERROR";
    }
}



console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5)); 
console.log(basicOp('/', 49, 7));
console.log(basicOp('6', 49, 7));