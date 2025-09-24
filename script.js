//function for addtion
function add(num1, num2){
    return num1 + num2;
}

console.log(add(4,5));

//function for substraction

function substraction(num1, num2){
    return num1 - num2;
}

console.log(substraction(7, 8));

//function for multiply

function multiply(num1, num2){
    return num1 * num2;
}

console.log(multiply(4, 5));

// function for divide

function divide(num1, num2){

    if(num2 === 0){
        return "cannot divide by 0";
    } else {
        return num1 / num2
    }
    
}

console.log(divide(4, 2));


// function for a operation 


function operation(operation, num1, num2){

    let result;

    switch(operation){
        case "+":
            result = add(num1, num2);
            break;

        case "-":
            result = substraction(num1, num2);
            break;

        case "*":
            result = multiply(num1,num2);
            break;

        case "/":
            result = divide(num1, num2);
            break;
        
        default:
            console.log("enter a valid operation e.g '+, -, *, /'");
    }

    return result;
}

console.log(operation("-", 7, 0));