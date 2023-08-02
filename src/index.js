module.exports = function toReadable (number) {
  let result = '';

  let arrayUnits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let arrayDozensWithTen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  let arrayDozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

  let arrayNumbers = ('' + number).split('').map(Number);
  
  if (arrayNumbers.length === 1) {
    result = arrayUnits[arrayNumbers[0]];
  } else if (arrayNumbers.length === 2) {
    if (arrayNumbers[0] === 1) {
        result = arrayDozensWithTen[arrayNumbers[1]];
    } else {
        if (arrayNumbers[1] === 0) {
            result = arrayDozens[arrayNumbers[0] - 2];
        } else {
            result = arrayDozens[arrayNumbers[0] - 2] + ' ' + arrayUnits[arrayNumbers[1]];
        }
    }
  } else {
    if (arrayNumbers[1] === 0 && arrayNumbers[2] === 0) {
        result = arrayUnits[arrayNumbers[0]] + ' hundred';
    } else if (arrayNumbers[1] === 0) {
        result = arrayUnits[arrayNumbers[0]] + ' hundred ' + arrayUnits[arrayNumbers[2]];
    } else if (arrayNumbers[1] === 1){
        result = arrayUnits[arrayNumbers[0]] + ' hundred ' + arrayDozensWithTen[arrayNumbers[2]];
    } else {
        if (arrayNumbers[2] === 0) {
            result = arrayUnits[arrayNumbers[0]] + ' hundred ' + arrayDozens[arrayNumbers[1] - 2];
        } else {
            result = arrayUnits[arrayNumbers[0]] + ' hundred ' + arrayDozens[arrayNumbers[1] - 2] + ' ' + arrayUnits[arrayNumbers[2]];
        }
    }
  }

  return result;
}
