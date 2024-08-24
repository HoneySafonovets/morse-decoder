const decode = (morse) => {
  const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
  };
  let stringAnswer = '';
  let array = [];
  let joinArray = [];
  let eTwoSteps;
  let keyInFor = '';
  let element;

  for (let i = 0; i < morse.length; i++) {
    countI = i + 10

    element = morse.slice(i, countI)

    for (let e = 0; e < element.length; e++) {

      eTwoSteps = element.slice(e, (e + 2))

      if (eTwoSteps === '10') {
        array.push('.')
      }
      if (eTwoSteps === '11') {
        array.push('-')
      }
      if (eTwoSteps === '00') {
        array.push('')
      }
      if (eTwoSteps === '**') {
        array.push('**')
      }
      e = e + 1;
    }
    joinArray = array.join('');

    for (let key in MORSE_TABLE) {
      if (joinArray === key) {
        keyInFor = MORSE_TABLE[key]
        stringAnswer += `${keyInFor}`;
      }
    }
    if (joinArray === '**********') {
      stringAnswer = `${stringAnswer}${' '}`
    }

    array.splice(0,array.length);
    joinArray = ''
    i = i + 9;
  }
  return stringAnswer
}

module.exports = {
  decode
}