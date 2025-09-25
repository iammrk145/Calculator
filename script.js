//function for addtion
function add(num1, num2){
    return num1 + num2;
}

//function for substraction

function substraction(num1, num2){
    return num1 - num2;
}



//function for multiply

function multiply(num1, num2){
    return num1 * num2;
}



// function for divide

function divide(num1, num2){

    if(num2 === 0){
        return "cannot divide by 0";
    } else {
        return num1 / num2
    }
    
}


// function for a operation 


function operate(operation, num1, num2){

    let result;

    switch(operation){
        case "+":
            result = add(num1, num2);
            break;

        case "-":
            result = substraction(num1, num2);
            break;

        case "x":
            result = multiply(num1,num2);
            break;

        case "÷":
            result = divide(num1, num2);
            break;
        
        default:
            console.log("enter a valid operation e.g '+, -, *, /'");
    }

    return result;
}

console.log(operate("-", 7, 0));

let nextnumber = "";
let currentNumber = "";
let operateBtnValue;
let justevaluated = false;

const numbBtns = document.querySelectorAll(".numberbtn");
const currentdisplay = document.querySelector("#currentdisplay");

numbBtns.forEach(button => {
    button.addEventListener('click', () => {

        if(button.textContent === '.' && currentdisplay.textContent.includes(".")){
            return;
        }

        if(justevaluated){
            currentdisplay.textContent = "";
            historyDisplay.textContent = "";
            currentNumber = "";
            justevaluated = false;
         } 

    
        const btnVallue = button.textContent;
        currentdisplay.textContent += btnVallue;
        nextnumber = currentdisplay.textContent;

        
         
    } )
})

