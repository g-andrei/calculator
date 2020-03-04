// ##### INSERT NUMBER #####

function insertNumber(x) {
    var number = document.getElementById("screen");

   switch( x ) {
        case 1:
            number.value += '1';
            break;
        case 2:
            number.value += '2';
            break;
        case 3:
            number.value += '3';
            break;   
        case 4:
            number.value += '4';
            break;
        case 5:
            number.value += '5';
            break;
        case 6:
            number.value += '6';
            break; 
        case 7:
            number.value += '7';
            break;
        case 8:
            number.value += '8';
            break;
        case 9:
            number.value += '9';
            break; 
        case 0:
            number.value += '0';
            break;          
   } 
}

// ##### MATHEMATICAL OPERATION #####

function insertOperation(x) {
    var number = document.getElementById("screen");

   switch( x ) {
        case '+':
            number.value += '+';
            break;
        case '-':
            number.value += '-';
            break;
        case '*':
            number.value += '*';
            break;
        case '/':
            number.value += '/';
            break;
        case '.':
            number.value += '.';
            break;
   }
}

// ##### EQUAL #####

function equal() {
    var answer = document.getElementById("screen").value;
    var output = document.getElementById("screen");

    if (answer) {
        answer = eval(answer);
    }

    output.value = answer;

    return answer;
} 


// ##### CLEAR SCREEN #####

function clearScreen() {
    document.getElementById("screen").value = "";
}

// ###### BACKSPACE ######

function backSpace() {
    var input = document.getElementById("screen");
    var back = input.value;

    if ( back.length > 0 ) {
        back = back.substring(0, back.length-1 );
        input.value = back;
    } 
}