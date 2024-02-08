"use strict";
//caesar message solver
//
//message - the message being solved
//shift - the amount of places being shifted (default 3, should implement 1-25)
Object.defineProperty(exports, "__esModule", { value: true });
exports.reversecaesarsolve = exports.caesarsolve = void 0;
function caesarsolve(message, shift) {
    var key = +shift; // Was importing from HTML as STRING, so CONVERT TO NUMBER
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let msg = message.toUpperCase();
    let charmsg = msg.split('');
    console.log(charmsg);
    let solution = "";
    let position = 0;
    for (let step = 0; step < msg.length; step++) {
        //first need to find what position the character we are at is
        //STEP is location in MESSAGE
        for (let index = 0; index < alphabet.length; index++) {
            if (msg[step] == alphabet[index]) //finding the position in the alphabet. if it isn't then its probably a space, or not a letter, no need to shift or do anything
                position = index;
            //now we have alphabet position, we need to shift
        }
        position = position + key; //position is now where the cipher needs to be
        if (msg[step].toUpperCase() != msg[step].toLowerCase()) {
            if (position > 25) //we need to start from beginning again
                position = position - 26;
            solution = solution.concat(alphabet[position]);
        }
        else {
            solution = solution.concat(msg[step]);
        }
    }
    return solution;
}
exports.caesarsolve = caesarsolve;
//caesar message solver
//
//message - the message being solved
//shift - the amount of places being shifted (default 3, should implement 1-25)
function reversecaesarsolve(message, shift) {
    let key = shift * -1; // Was importing from HTML as STRING, so CONVERT TO NUMBER
    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let msg = message.toUpperCase();
    let charmsg = msg.split('');
    console.log(charmsg);
    let solution = "";
    let position = 0;
    for (let step = 0; step < msg.length; step++) {
        //first need to find what position the character we are at is
        //STEP is location in MESSAGE
        for (let index = 0; index < alphabet.length; index++) {
            if (msg[step] == alphabet[index]) //finding the position in the alphabet. if it isn't then its probably a space, or not a letter, no need to shift or do anything
                position = index;
            //now we have alphabet position, we need to shift
        }
        position = position + key; //position is now where the cipher needs to be
        if (msg[step].toUpperCase() != msg[step].toLowerCase()) {
            if (position < 0) //we need to start from beginning again
                position = position + 26;
            solution = solution.concat(alphabet[position]);
        }
        else {
            solution = solution.concat(msg[step]);
        }
    }
    return solution;
}
exports.reversecaesarsolve = reversecaesarsolve;
