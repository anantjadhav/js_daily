function checkValue() {
    let userValue = document.getElementById("userInput1").value;
    
    // Check if the input is a valid number
    if (isNaN(userValue) || userValue.trim() === "") {
        document.getElementById("demo").innerHTML = "This is not a number. Please enter the correct number.";
    } else {
        userValue = parseFloat(userValue); // Convert the string input to a number for comparison
        if (userValue > 10) {
            document.getElementById("demo").innerHTML = `The value ${userValue} is greater than 10`;
        } else if (userValue == 10) {
            document.getElementById("demo").innerHTML = `The value ${userValue} is equal to 10`;
        } else {
            document.getElementById("demo").innerHTML = `The value ${userValue} is less than 10`;
        }
    }
}

function checkDataType(){
    let userInput = document.getElementById("userInput").value;
    let parseNumber = parseFloat(userInput);
    let dataType;
    
    if(!isNaN(parseNumber) && !isNaN(userInput)){
        dataType = "number";
    } else if (userInput.toLowerCase() == "true" || userInput.toLowerCase() == "false"){
        dataType = "boolean";
    } else if (userInput.toLowerCase() == "null"){
        dataType = "null";
    } else if (userInput.toLowerCase() == "undefined"){
        dataType = "undefined";
    } else {
        dataType = "string";
    }
    document.getElementById("demo1").innerHTML = `The data type of ${userInput} is ${dataType}`;
    
}


function checkAge(){
    let age = document.getElementById("age").value;

    if (isNaN(age) || age.trim() === "") {
        document.getElementById("message").innerHTML = "Please enter a valid age.";
        document.getElementById("para").style.display = "none";
    } else {
        age = parseInt(age);
        if(age >= 18){
            document.getElementById("para").style.display = "block";
            document.getElementById("message").innerHTML = ""; // Clear the message
        } else {
            document.getElementById("para").style.display = "none";
            document.getElementById("message").innerHTML = "Your age is too small to see this info.";
        }
    }
}

function greetUser(){
    let currentTime = new Date().getHours();
    let message;
    let user = "Anant Jadhav"
    switch(true){
        case (currentTime >= 6 && currentTime < 12):
            message = "Good Morning";
            break;
        case (currentTime >= 12 && currentTime < 16):
            message = "Good Afternoon";
            break;
        case (currentTime >= 16 && currentTime < 24):
            message = "Good Evening";
            break;
        case (currentTime >= 0 && currentTime < 6):
            message = "Good Night";
            break;
    }
    document.getElementById("msg").innerHTML = message + " " + user;
}

greetUser();


// Disable right-click context menu
document.addEventListener("contextmenu", event => event.preventDefault());

// Disable key combinations for opening developer tools (Ctrl + C, Ctrl + V, Ctrl + U, F12)
document.onkeydown = function(e) {
    // List of key codes to disable
    const disabledKeys = [67, 86, 85, 117, 73, 74, 123]; // Ctrl+C, Ctrl+V, Ctrl+U, F12, Ctrl+Shift+I, Ctrl+Shift+J

    if (e.ctrlKey && disabledKeys.includes(e.keyCode)) {
        // Disable specific Ctrl+Key and F12
        return false;
    } else if (e.keyCode === 123 || (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74))) {
        // Disable F12, Ctrl+Shift+I (DevTools), Ctrl+Shift+J (Console)
        return false;
    } else {
        return true;
    }
};

// Detect if the developer tools are opened
function detectDevTools() {
    let devtoolsOpened = false;
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function () {
            devtoolsOpened = true;
            document.body.style.display = "none"; // Hide all content
        }
    });
    console.log(element); // Trigger the getter function

    if (devtoolsOpened === false) {
        document.body.style.display = "block"; // Show the content if DevTools is closed
    }
}

// Continuously check if the developer tools are opened
setInterval(detectDevTools, 500);


