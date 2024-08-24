// const MORSE_TABLE = {
//     '.-':     'a',
//     '-...':   'b',
//     '-.-.':   'c',
//     '-..':    'd',
//     '.':      'e',
//     '..-.':   'f',
//     '--.':    'g',
//     '....':   'h',
//     '..':     'i',
//     '.---':   'j',
//     '-.-':    'k',
//     '.-..':   'l',
//     '--':     'm',
//     '-.':     'n',
//     '---':    'o',
//     '.--.':   'p',
//     '--.-':   'q',
//     '.-.':    'r',
//     '...':    's',
//     '-':      't',
//     '..-':    'u',
//     '...-':   'v',
//     '.--':    'w',
//     '-..-':   'x',
//     '-.--':   'y',
//     '--..':   'z',
//     '.----':  '1',
//     '..---':  '2',
//     '...--':  '3',
//     '....-':  '4',
//     '.....':  '5',
//     '-....':  '6',
//     '--...':  '7',
//     '---..':  '8',
//     '----.':  '9',
//     '-----':  '0',
// };

// function decode(expr) {
//   // First element
//   let array1 = [];
//   let el = [...expr];
//   let element;
//   let arrayLength = expr.length / 10
//   for (let i = 0; i < arrayLength; i++) {
//     element = el.slice(0, 10).join('')
//     for (let j = 0; j < 10; j++) {
//       el.shift()
//     }
//     array1.push(element);
//   }

//   let string1 = '';
//   for (let l = 0; l < array1.length; l++) {
//     let array2 = [];
//     let el2;
//     let element2;
//     let p;
//     let array4 = []; 
//     let array5 = [];
//     let array7 = [];
//     let string2;
//     let pushArr;
//     let keyInFor;
//     let stringAnwer = '';
//     el2 = [...array1[l]]

//       for (let Y = 0; Y < 5; Y++) {
//           element2 = el2.slice(0, 2).join('')
//           for (let ele = 0; ele < 2; ele++) {
//             el2.shift()
//           }
//           array2.push(element2)
//         }

//       for (let er = 0; er < array2.length; er++) {
//         if (array2[er] === '10') {
//           array4.push('.')
//         }
//         if (array2[er] === '11') {
//           array4.push('-')
//         }
//         if (array2[er] === '00') {
//           array4.push('')
//         }
//         if (array2[er] === '**') {
//           array4.push('**')
//         }
//       }
//       p = array4.join('')
//       // console.log(p)
//       // РАзобраться здесь
//       for (let key in MORSE_TABLE) {
//         if (p === key) {
//           keyInFor = MORSE_TABLE[key]
//           stringAnwer += `${keyInFor}`;
//         }
//       }
//       if (p === '**********') {
//         stringAnwer += ' '
//       }
//       string1 += stringAnwer
//   }

//   return string1
// }

// console.log(decode('0000101110000011111100000010110000111010**********00000000110000111111**********00101111100000101110000011111100001111100000101110000000101100000011110000001111000000101000000011100000111110'))

// module.exports = {
//   decode
// }

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