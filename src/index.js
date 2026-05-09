module.exports = function decode(expr) {
  const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
  };

  let stringAnswer = '';
  const array = [];
  let joinArray = [];
  let eTwoSteps;
  let element;

  function searchKey(answerString, string, VARIABLE) {
    let answetStringInSearchKey = '';
    Object.entries(VARIABLE).forEach(([key, value]) => {
      if (string === key) {
        answetStringInSearchKey += value;
      }
    });

    return answetStringInSearchKey;
  }

  for (let i = 0; i < expr.length; i += 1) {
    const countI = i + 10;

    element = expr.slice(i, countI);

    for (let e = 0; e < element.length; e += 1) {
      eTwoSteps = element.slice(e, e + 2);

      if (eTwoSteps === '10') {
        array.push('.');
      }
      if (eTwoSteps === '11') {
        array.push('-');
      }
      if (eTwoSteps === '00') {
        array.push('');
      }
      if (eTwoSteps === '**') {
        array.push('**');
      }
      e += 1;
    }
    joinArray = array.join('');

    if (joinArray === '**********') {
      stringAnswer = `${stringAnswer}${' '}`;
    }
    stringAnswer += `${searchKey(stringAnswer, joinArray, MORSE_TABLE)}`;

    array.splice(0, array.length);
    joinArray = '';
    i += 9;
  }
  return stringAnswer;
};
