//caesar message solver
//
//message - the message being solved
//shift - the amount of places being shifted (default 3, should implement 1-25)
let reversecaesarsolve: (message: string, shift: number) => string = function (message: string, shift: number): string {

    const alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let msg: string = message.toUpperCase();
    let charmsg = msg.split('');
    let solution: string = "";
    let position: number = 0;

    for (let step = 0; step < msg.length; step++) {
        //first need to find what position the character we are at is
        //STEP is location in MESSAGE
        for (let index = 0; index < alphabet.length; index++) {

            if (msg[step] == alphabet[index]) //finding the position in the alphabet. if it isn't then its probably a space, or not a letter, no need to shift or do anything

                position = index;
            //now we have alphabet position, we need to shift

        }
        position = position + shift //position is now where the cipher needs to be
        if (msg[step].toUpperCase() != msg[step].toLowerCase()) {
            if (position > 25) //we need to start from beginning again
                position = position - 26;
            solution = solution.concat(alphabet[position]);
        } else {
            solution = solution.concat(msg[step]);
        }
    }

    return solution;
}

module.exports.caesarsolve = reversecaesarsolve;