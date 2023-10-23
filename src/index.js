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

function decode(expr) {
  // First element
  let array1 = [];
  let el = [...expr];
  let element;
  let arrayLength = expr.length / 10
  for (let i = 0; i < arrayLength; i++) {
    element = el.slice(0, 10).join('')
    for (let j = 0; j < 10; j++) {
      el.shift()
    }
    array1.push(element);
  }
  // console.log(splitArray(e))
  // Second element
  let string1 = '';
  for (let l = 0; l < array1.length; l++) {
    let array2 = [];
    let el2;
    let element2;
    let p;
    let array4 = []; 
    let array5 = [];
    let array7 = [];
    let string2;
    let pushArr;
    let keyInFor;
    let stringAnwer = '';
    el2 = [...array1[l]]
    // console.log(l)
    // console.log(el2)
    // if (array1[l] != '**********') {
      for (let Y = 0; Y < 5; Y++) {
          // console.log(el2)
          // console.log(el2[1])
          element2 = el2.slice(0, 2).join('')
          for (let ele = 0; ele < 2; ele++) {
            el2.shift()
          }
          array2.push(element2)
        }
        // console.log(array2)
      // } 
      // if (array1[l] === '**********') {
      //   array5 = array2.push(' ')
      // }
      
      // console.log(array2)
      // console.log(array2);
      for (let er = 0; er < array2.length; er++) {
        if (array2[er] === '10') {
          array4.push('.')
        }
        if (array2[er] === '11') {
          array4.push('-')
        }
        if (array2[er] === '00') {
          array4.push('')
        }
        if (array2[er] === '**') {
          array4.push('**')
        }
      }
      p = array4.join('')
      // console.log(p)
      // РАзобраться здесь
      for (let key in MORSE_TABLE) {
        if (p === key) {
          keyInFor = MORSE_TABLE[key]
          stringAnwer += `${keyInFor}`;
        }
      }
      if (p === '**********') {
        stringAnwer += ' '
      }
      string1 += stringAnwer
  }

  return string1
}

module.exports = {
    decode
}