"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeBase = void 0;
function changeBase(system, value) {
    //javascript has a toString(radix) function
    //by passing 2 as the radix, it converts our number to binary. The radix represents the base  (2 = binary, 8 = octal, 16 = hexadecimal)
    var newvalue = +value; // Was importing from HTML as STRING, so CONVERT TO NUMBER
    if (system === "binary") {
        return newvalue.toString(2);
    }
    if (system === "octal") {
        return newvalue.toString(8);
    }
    if (system === "hex") {
        return newvalue.toString(16);
    }
}
exports.changeBase = changeBase;
