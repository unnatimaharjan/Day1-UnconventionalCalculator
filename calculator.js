const userInput=document.getElementById('screen');
const addBtn=document.getElementById('add');
const subBtn=document.getElementById('subtract');
const prodBtn=document.getElementById('multiply');
const divBtn=document.getElementById('divide');

const currentResultOutput=document.getElementById('current-result');
const currentCalculationOutput=document.getElementById('current-calculation');

function outputResult(result,text){
    currentResultOutput.textContent=result;
    currentCalculationOutput.textContent=text
}

let defaultResult=0;
let currentResult=defaultResult;

function getUserInput(){
    return parseInt(userInput.value);
}

function showOutput(operator,resultBeforeCalc,calcNumber){
    const calcDescription=`${resultBeforeCalc} ${operator} ${calcNumber}`;
    outputResult(currentResult,calcDescription);
}

function add(){
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult+=enteredNumber;
    showOutput('+',initialResult,enteredNumber);
}

function subtract(){
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult-=enteredNumber;
    showOutput('-',initialResult,enteredNumber);
}

function multiply(){
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult*=enteredNumber;
    showOutput('*',initialResult,enteredNumber);
}

function divide(){
    const enteredNumber=getUserInput();
    const initialResult=currentResult;
    currentResult/=enteredNumber;
    showOutput('/',initialResult,enteredNumber);
}

addBtn.addEventListener('click',add);
subBtn.addEventListener('click',subtract);
prodBtn.addEventListener('click',multiply);
divBtn.addEventListener('click',divide);