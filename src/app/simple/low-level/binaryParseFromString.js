let BinaryNumberState = require('./BinaryNumberState');

function isNegative(stringIn){
    return stringIn.charAt(0) === '-';
}

function trimSign(stringIn){
    return stringIn.substring(1);
}

/**
 * @param stringIn
 * @return BinaryNumberState
 */
function binaryParseFromString(stringIn){
    let result = new BinaryNumberState();

    if(isNegative(stringIn)){
        stringIn = trimSign(stringIn);
        result.isPositive = false;
    }

    //TODO: Get binary value of string
}