$(document).ready(function(){
    $('.number').on('click',numberPress);
    $('.operator').on('click',operatorPress);
    $('.equals').on('click',equalsPress);
    $('.clearall').on('click',clearallPress);
    $('.clearone').on('click',clearonePress);
    $('#decimal').on('click',multipleDecimals);
});

var inputArray = [''];
var numArray = [];
var storage = null;
var decimalFlag = false;
var operatorFlag = false;
var equalsFlag = false;

function numberPress(){
    operatorFlag = false;
    //console.log('numberPress function called');
    var numberPressed = $(this).text();
    var lastNumber = inputArray.length-1;
    inputArray[lastNumber] += numberPressed;
    console.log(inputArray);
    var numDisplay = inputArray.join(' ');
    //console.log(x);
    $('.screen').text(numDisplay);

    if(inputArray.length<4 && inputArray[1] === '+'){
        storage = parseFloat(inputArray[0]) + parseFloat(inputArray[2]);
        console.log(inputArray);
    } else if(inputArray.length<4 && inputArray[1] === '-'){
        storage = parseFloat(inputArray[0]) - parseFloat(inputArray[2]);
        console.log(inputArray);
    } else if(inputArray.length<4 && inputArray[1] === '*'){
        storage = parseFloat(inputArray[0]) * parseFloat(inputArray[2]);
        console.log(inputArray);
    } else if(inputArray.length<4 && inputArray[1] === '/'){
        storage = parseFloat(inputArray[0]) / parseFloat(inputArray[2]);
        console.log(inputArray);
    }
}

function multipleDecimals(){
    if(decimalFlag === false){
        var decimalPressed = $(this).text();
        var lastNumber = inputArray.length-1;
        inputArray[lastNumber] += decimalPressed;
        var decimalAdd = inputArray.join(' ');
        $('.screen').text(decimalAdd);
        decimalFlag = true;
    } else {
        return;
    }
}

function operatorPress(){
    equalsFlag = false;
    decimalFlag = false;
    //console.log('operatorPress function called');
    if(operatorFlag === false) {
        var operatorPressed = $(this).text();
        inputArray.push(operatorPressed);
        inputArray.push('');
        console.log(inputArray);
        var opDisplay = inputArray.join(' ');
        //console.log(y);
        $('.screen').text(opDisplay);
        operatorFlag = true;
    } else {
        return;
    }

    if(inputArray.length>4 && operatorPressed === '+'){
        inputArray[0] = storage;
        console.log(inputArray[0]);
        inputArray.splice(1,2);
    } else if(inputArray.length>4 && operatorPressed === '-'){
        inputArray[0] = storage;
        console.log(inputArray[0]);
        inputArray.splice(1,2);
    } else if(inputArray.length>4 && operatorPressed === '*'){
        inputArray[0] = storage;
        console.log(inputArray[0]);
        inputArray.splice(1,2);
    } else if(inputArray.length>4 && operatorPressed === '/'){
        inputArray[0] = storage;
        console.log(inputArray[0]);
        inputArray.splice(1,2);
    }

    if(isNaN(parseInt(inputArray[0])) === true && inputArray[1] === operatorPressed){
        inputArray.splice(1,2);
        $('.screen').text(inputArray[0]);
        console.log(inputArray);
    }
}

var operatorStorage = null;
var secondNumberStorage = null;

function equalsPress(){
    operatorFlag = false;
    //console.log('equalsPress function called');
    if(equalsFlag === false){
        if(inputArray.length<4 && inputArray[1] === '+' && isNaN(parseInt(inputArray[2])) === true){
            inputArray.splice(1,2);
            inputArray[0] = parseFloat(inputArray[0]) + parseFloat(inputArray[0]);
            console.log(inputArray);
        } else if(inputArray.length<4 && inputArray[1] === '-' && isNaN(parseInt(inputArray[2])) === true){
            inputArray.splice(1,2);
            inputArray[0] = parseFloat(inputArray[0]) - parseFloat(inputArray[0]);
            console.log("operation rollover does not work for subtraction");
        } else if(inputArray.length<4 && inputArray[1] === '*' && isNaN(parseInt(inputArray[2])) === true){
            inputArray.splice(1,2);
            inputArray[0] = parseFloat(inputArray[0]) * parseFloat(inputArray[0]);
            console.log(inputArray);
        } else if(inputArray.length<4 && inputArray[1] === '/' && isNaN(parseInt(inputArray[2])) === true){
            inputArray.splice(1,2);
            inputArray[0] = parseFloat(inputArray[0]) / parseFloat(inputArray[0]);
            console.log("operation rollover does not work for division");
        }

        if(inputArray.length<4 && inputArray[1] === '+'){
            operatorStorage = inputArray[1];
            secondNumberStorage = inputArray[2];
            inputArray[0] = parseFloat(inputArray[0]) + parseFloat(inputArray[2]);
            inputArray.splice(1,2);
            console.log(inputArray);
            $('.screen').text(inputArray[0]);
        } else if(inputArray.length<4 && inputArray[1] === '-'){
            operatorStorage = inputArray[1];
            secondNumberStorage = inputArray[2];
            inputArray[0] = parseFloat(inputArray[0]) - parseFloat(inputArray[2]);
            inputArray.splice(1,2);
            console.log(inputArray);
            $('.screen').text(inputArray[0]);
        } else if(inputArray.length<4 && inputArray[1] === '*') {
            operatorStorage = inputArray[1];
            secondNumberStorage = inputArray[2];
            inputArray[0] = parseFloat(inputArray[0]) * parseFloat(inputArray[2]);
            inputArray.splice(1, 2);
            console.log(inputArray);
            $('.screen').text(inputArray[0]);
        } else if(inputArray.length<4 && inputArray[1] === '/') {
            operatorStorage = inputArray[1];
            secondNumberStorage = inputArray[2];
            inputArray[0] = parseFloat(inputArray[0]) / parseFloat(inputArray[2]);
            if (parseFloat(inputArray[2]) === 0) {
                //console.log('error');
                $('.screen').text('Error');
            } else {
                $('.screen').text(inputArray[0]);
            }
            inputArray.splice(1, 2);
            console.log(inputArray);
        } else if(isNaN(parseInt(inputArray[0])) === false) {
            $('.screen').text(inputArray[0]);
        } else {
            console.log(inputArray);
            $('.screen').text('0');
        }
        equalsFlag = true;
    } else {
        if(operatorStorage === '+'){
            console.log(inputArray[0]);
            inputArray[0] = parseFloat(inputArray[0]) + parseFloat(secondNumberStorage);
            console.log(inputArray[0]);
            $('.screen').text(inputArray[0]);
        } else if(operatorStorage === '-'){
            console.log(inputArray[0]);
            inputArray[0] = parseFloat(inputArray[0]) - parseFloat(secondNumberStorage);
            console.log(inputArray[0]);
            $('.screen').text(inputArray[0]);
        } else if(operatorStorage === '*'){
            console.log(inputArray[0]);
            inputArray[0] = parseFloat(inputArray[0]) * parseFloat(secondNumberStorage);
            console.log(inputArray[0]);
            $('.screen').text(inputArray[0]);
        } else if(operatorStorage === '/'){
            console.log(inputArray[0]);
            inputArray[0] = parseFloat(inputArray[0]) / parseFloat(secondNumberStorage);
            console.log(inputArray[0]);
            $('.screen').text(inputArray[0]);
        }
    }
}

function clearallPress(){
    equalsFlag = false;
    decimalFlag = false;
    operatorFlag = false;
    //console.log('clearallPress function called');
    inputArray = [''];
    numArray = [];
    console.log(inputArray);
    console.log(numArray);
    $('.screen').text('');
}

function clearonePress(){
    equalsFlag = false;
    decimalFlag = false;
    operatorFlag = false;
    //console.log('clearonePress function called');
    if(isNaN(parseInt(inputArray[2])) === true){
        console.log('operator delete');
        inputArray.splice(inputArray.length-2,2);
        console.log(inputArray);
        var clearedOpDisplay = inputArray.join(' ');
        $('.screen').text(clearedOpDisplay);
    } else {
        console.log('number delete');
        inputArray.splice(inputArray.length-1,1);
        inputArray.push('');
        console.log(inputArray);
        var clearedNumDisplay = inputArray.join(' ');
        $('.screen').text(clearedNumDisplay);
    }
}
