//*********************************************************************************************************************************
//  E N I G M A
//*********************************************************************************************************************************
var plainAlphabet = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var encryptedAlphabet = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

//Traduce la cadena de entrada basada en inputAlphabet a una cadena salida utilizando outputAlphabet
var translate = (text, inputAlphabet, outputAlphabet) => {
    var outputText = "";
    for (let i = 0; i < text.length; i++) {
        outputText += ((letter = inputAlphabet.indexOf(text[i])) === -1) ? text[i] : outputAlphabet[letter];
    }
    return outputText;
}

//Procesa el evento click del boton "btn-encrypt" para encriptar el mensaje introducido en el campo "plainText"
var handleBtnEncryptClick = () => {
    
    if (plainTextField.value) {
        encryptedTextField.value = translate(plainTextField.value.toLowerCase(), plainAlphabet, encryptedAlphabet);
    } else {
        window.alert("Debe introducir un texto para encryptar");
    }
}

//Procesa el evento click del boton "btn-decrypt" para desencriptar el mensaje introducido en el campo "encryptedText"
var handleBtnDecryptClick = () => {

    if (encryptedTextField.value) {
        plainTextField.value = translate(encryptedTextField.value, encryptedAlphabet, plainAlphabet);
    } else {
        window.alert("Debe introducir un texto para desencryptar");
    }
}

//Campos del formulario en los que se introducen los mensajes para Encriptar/Desencriptar
var plainTextField = document.getElementById("plainText");
var encryptedTextField = document.getElementById("encryptedText");

//Asocia un controlador al evento click de cada uno de los botones
document.getElementById("btn-encrypt").addEventListener("click", handleBtnEncryptClick);
document.getElementById("btn-decrypt").addEventListener("click", handleBtnDecryptClick);



//*********************************************************************************************************************************
//  G E N E R A D O R    A L E A T O R I O
//*********************************************************************************************************************************
var randomPick = (n, min, max) => {

    var generatedNumbers = [];
    var number;

    while (generatedNumbers.length < n) {
        number = Math.floor(Math.random() * max) + min;
        if (generatedNumbers.indexOf(number) === -1) {
            generatedNumbers.push(number);
        }
    }
    return generatedNumbers;
}

console.log(randomPick(6,  1, 49));
console.log(randomPick(1, 1, 6));
console.log(randomPick(15, 1, 15));



