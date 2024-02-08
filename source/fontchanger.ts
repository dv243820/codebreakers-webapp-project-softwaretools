export function fontchanger(message: string, font: string) {


    const inputString = message;
    const letterRegex = /[a-zA-Z]/; //LETTER REGISTRY - KEEPS AN INDEX OF WHAT IS ALLOWED TO BE PROCESSED BY OUR FUNCTION
    let outputString = "";

    if (font == "doublestruck") //HTML ID for Mathmatical Bold Unicode style
        for (let i = 0; i < inputString.length; i++) {
            const charCode = inputString.charCodeAt(i);
            let fancyChar;

            if (letterRegex.test(inputString[i])) {
                if (charCode >= 97 && charCode <= 122) {
                    // lowercase letters
                    fancyChar = String.fromCharCode(55349, charCode - 97 + 56658);
                } else if (charCode >= 65 && charCode <= 90) {
                    if (inputString[i] === "C") {
                        fancyChar = String.fromCharCode(8450); // Unicode code point for mathmatical bold C
                    } else if (inputString[i] === "H") {
                        fancyChar = String.fromCharCode(8461); // Unicode code point for mathmatical bold H
                    } else if (inputString[i] === "N") {
                        fancyChar = String.fromCharCode(8469); // Unicode code point for mathmatical bold N
                    } else if (inputString[i] === "P") {
                        fancyChar = String.fromCharCode(8473); // Unicode code point for mathmatical bold P
                    } else if (inputString[i] === "Q") {
                        fancyChar = String.fromCharCode(8474); // Unicode code point for mathmatical bold Q
                    } else if (inputString[i] === "R") {
                        fancyChar = String.fromCharCode(8477); // Unicode code point for mathmatical bold R
                    } else if (inputString[i] === "Z") {
                        fancyChar = String.fromCharCode(8484); // Unicode code point for mathmatical bold Z
                    } else {
                        // default case for other uppercase letters
                        fancyChar = String.fromCharCode(55349, charCode - 87 + 56654);
                    }
                }
            } else {
                // not a letter, just use the original character
                fancyChar = inputString[i];
            }

            outputString += fancyChar;
        }
    else if (font == "mathbold") {
        for (let i = 0; i < inputString.length; i++) {
            const charCode = inputString.charCodeAt(i);
            let fancyChar;

            if (letterRegex.test(inputString[i])) {
                if (charCode >= 97 && charCode <= 122) {
                    // lowercase letters
                    fancyChar = String.fromCharCode(55349, charCode - 97 + 56346);
                }
                if (charCode >= 65 && charCode <= 90) {
                    //capital letters
                    fancyChar = String.fromCharCode(55349, charCode - 87 + 56342);
                }

            } else {
                // not a letter, just use the original character
                fancyChar = inputString[i];
            }

            outputString += fancyChar;
        }
    } else if (font == "monospace") {
        for (let i = 0; i < inputString.length; i++) {
            const charCode = inputString.charCodeAt(i);
            let fancyChar;

            if (letterRegex.test(inputString[i])) {
                if (charCode >= 97 && charCode <= 122) {
                    // lowercase letters
                    fancyChar = String.fromCharCode(55349, charCode - 97 + 56970);
                }
                if (charCode >= 65 && charCode <= 90) {
                    //capital letters
                    fancyChar = String.fromCharCode(55349, charCode - 65 + 56944);
                }

            } else {
                // not a letter, just use the original character
                fancyChar = inputString[i];
            }

            outputString += fancyChar;
        }
    } else if (font == "bubble") {
        for (let i = 0; i < inputString.length; i++) {
            const charCode = inputString.charCodeAt(i);
            let fancyChar;

            if (letterRegex.test(inputString[i])) {
                if (charCode >= 97 && charCode <= 122) {
                    // lowercase letters
                    fancyChar = String.fromCharCode(charCode - 97 + 9424);
                }
                if (charCode >= 65 && charCode <= 90) {
                    //capital letters
                    fancyChar = String.fromCharCode(charCode - 65 + 9398);
                }

            } else {
                // not a letter, just use the original character
                fancyChar = inputString[i];
            }

            outputString += fancyChar;
        }
    } else if (font == "fraktur") {
        for (let i = 0; i < inputString.length; i++) {
            const charCode = inputString.charCodeAt(i);
            let fancyChar;

            if (letterRegex.test(inputString[i])) {
                if (charCode >= 97 && charCode <= 122) {
                    // lowercase letters
                    fancyChar = String.fromCharCode(55349, charCode - 97 + 56606);
                } else if (charCode >= 65 && charCode <= 90) {
                    if (inputString[i] === "C") {
                        fancyChar = String.fromCharCode(8493); // Unicode code point for mathmatical bold C
                    } else if (inputString[i] === "H") {
                        fancyChar = String.fromCharCode(8460); // Unicode code point for mathmatical bold H
                    } else if (inputString[i] === "I") {
                        fancyChar = String.fromCharCode(8465); // Unicode code point for mathmatical bold N
                    } else if (inputString[i] === "R") {
                        fancyChar = String.fromCharCode(8476); // Unicode code point for mathmatical bold Q
                    } else if (inputString[i] === "Z") {
                        fancyChar = String.fromCharCode(8488); // Unicode code point for mathmatical bold Z
                    } else {
                        // default case for other uppercase letters
                        fancyChar = String.fromCharCode(55349, charCode - 65 + 56580);
                    }
                }
            } else {
                // not a letter, just use the original character
                fancyChar = inputString[i];
            }

            outputString += fancyChar;
        }
    } else if (font == "italic") {
        for (let i = 0; i < inputString.length; i++) {
            const charCode = inputString.charCodeAt(i);
            let fancyChar;

            if (letterRegex.test(inputString[i])) {
                if (charCode >= 97 && charCode <= 122) {
                    // lowercase letters
                    fancyChar = String.fromCharCode(55349, charCode - 97 + 56866);
                } else if (charCode >= 65 && charCode <= 90) {

                    // default case for other uppercase letters
                    fancyChar = String.fromCharCode(55349, charCode - 65 + 56840);
                }
            } else {
                // not a letter, just use the original character
                fancyChar = inputString[i];
            }

            outputString += fancyChar;
        }
    }

    return outputString;
}