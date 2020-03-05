// ##### INSERT NUMBER #####

function insertNumber(x) {
    var number = document.getElementById("screenInput");

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
    var number = document.getElementById("screenInput");

   switch( x ) {
        case '+':
            number.value += ' + ';
            break;
        case '-':
            number.value += ' - ';
            break;
        case '*':
            number.value += ' * ';
            break;
        case '/':
            number.value += ' / ';
            break;
        case '.':
            number.value += '.';
            break;
   }
}

// ##### EQUAL #####

function equal() {
    var answer = document.getElementById("screenInput").value;
    var output = document.getElementById("screenOutput");
    var answer2;

    if (answer) {
        answer2 = eval(answer);
    }

    output.value = answer2;

    return answer + " = " + answer2;
} 

// ##### SHOW IN HYSTORY SCREEN #####
function historyTrack() {
    var paragraph = document.createElement("P");
    var x = document.createTextNode(equal());  
    
    paragraph.appendChild(x);
    document.getElementById("listHistory").appendChild(paragraph);
}


// ##### CLEAR SCREEN #####

function cleanScreen() {
    document.getElementById("screenInput").value = "";
    document.getElementById("screenOutput").value = "";
}

// ###### BACKSPACE ######

function backSpace() {
    var input = document.getElementById("screenInput");
    var back = input.value;

    if ( back.length > 0 ) {
        back = back.substring(0, back.length-1 );
        input.value = back;
    } 
}

// ###### HISTORY #####

function openHistoryScreen() {
    var historyScreen = document.getElementById("historyScreen");
    historyScreen.style.display = "block";
}

function closeHistoryScreen() {  
    var historyScreen = document.getElementById("historyScreen");
    historyScreen.style.display = "none";
}

function cleanHistory() {  
    var listOfCalculation = document.getElementById("listHistory");
    
    while (listOfCalculation.hasChildNodes()) {
        listOfCalculation.removeChild(listOfCalculation.firstChild);
    }
}