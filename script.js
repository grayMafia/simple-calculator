// functions for buttons' event handle


let displayArea = document.getElementById("display");

function digitBtnHandler(btnID, value){
    const btn = document.getElementById(btnID);
    btn.addEventListener('click', function(){
    displayArea.value += value;
    });
}


function clearBtnHandler(btnID){
    const btn = document.getElementById(btnID);
    btn.addEventListener('click', function(){
    displayArea.value = "";
    });
}



function delBtnHandler(btnID){
    const btn = document.getElementById(btnID);
    btn.addEventListener('click', function(){
    let displayValue = displayArea.value;
    displayArea.value = displayValue.slice(0,-1);
    });
}



function calculateBtnHandler(btnID, task){ 
    const btn = document.getElementById(btnID);   
    btn.addEventListener('click', function(){
        let displayValue = displayArea.value;
        try{
            if (displayValue) {
                let result;
                if (task == 'sqrt'){
                    result = Math.sqrt(displayValue);
                }
                else if (task == 'calculate') {
                    result  = eval(displayArea.value);
                }
                displayArea.value = result;
            }
            else{
                alert("Enter a number");
            }
        }
        catch (error) {
        alert('Invalid expression');
        }
    }); 
}


// calling the functions to execute

digitBtnHandler("btn0", 0);
digitBtnHandler("btn1", 1);
digitBtnHandler("btn2", 2);
digitBtnHandler("btn3", 3);
digitBtnHandler("btn4", 4);
digitBtnHandler("btn5", 5);
digitBtnHandler("btn6", 6);
digitBtnHandler("btn7", 7);
digitBtnHandler("btn8", 8);
digitBtnHandler("btn9", 9);
digitBtnHandler("btnPercent", '*0.01');
digitBtnHandler("btnDivide", '/');
digitBtnHandler("btnMulti", '*');
digitBtnHandler("btnMinus", '-');
digitBtnHandler("btnPlus", '+');
digitBtnHandler("btnPoint", '.');

clearBtnHandler("btnC");

delBtnHandler("btnDel");

calculateBtnHandler("btnSqrt", 'sqrt');
calculateBtnHandler("btnEqual", 'calculate');