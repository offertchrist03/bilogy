function truncateString(params = 'chose', limit = 3) {

  let newStr = ''
  for (let index = 0; index < limit; index++) {
    const char = params[index];
    newStr = newStr + char
  }
  return newStr

}

function capitalizeFirstLettre(params = 'ceCi est Une PHRase') {

  let newStr = ''
  for (let index = 0; index < params.length; index++) {
    let char = params[index];
    if (index === 0) {
      char = char.toUpperCase()
    } else {
      char = char.toLowerCase()
    }
    newStr = newStr + char
  }

  return newStr

}

function minTwoNumbers(params = 0) {
  let res = ''
  params < 10 ? res = '0' + params : res = params
  return res
}

function CheckOrNot(params) {
  return (
    <>
      {params !== 0 ? <i className="w-5 fa fa-check text-center text-green-500"></i> : <i className="w-5 fa fa-x text-center text-red-500"></i>}
    </>
  )
}

function IconWeb(params) {
  return (
    <>
      {params.includes('html') && <i className="fab fa-html5 text-orange-500"></i>}
      {params.includes('css') && <i className="fab fa-css3 text-blue-500"></i>}
      {params.includes('js') && <i className="fab fa-js text-yellow-500"></i>}
      {params.includes('php') && <i className="fab fa-php text-purple-500"></i>}
      {params.includes('tailwindcss') && <i className="fa fa-tornado text-sky-400"></i>}
      {params.includes('bootstrap') && <i className="fab fa-bootstrap text-indigo-500"></i>}
    </>
  )
}

function stringToArray(params = 'moi, moi1') {
  params = params + ','
  let array = [];
  let str = ''

  const getOnStr = () => {
    for (let index = 0; index < params.length; index++) {
      const char = params[index];
      if (char !== ',') {
        str = str + char
        // console.log('str :>> ', str);
      } else {
        array.push(str)
        str = ''
        // console.log('array :>> ', array);
        // console.log('str :>> ', str);
      }
    }
  }
  getOnStr()
  return array;
}

function returnRandomItemArrays(params = ['a', 'b', 'c']) {

  const res = params[Math.floor(Math.random() * params.length)]
  return res

}

function generateRandomNumbers() {

  const fuses = Math.floor(Math.random() * 999999999999999)
  return fuses

}

function generateRandomKey(limit = 30) {

  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
  const charLow = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  const charUpp = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  const charSpe = ["#", "$", "%", "&"]

  let allChars = [...numbers, ...charLow, ...charUpp, ...charSpe,]
  let key = ''

  for (let index = 0; index < limit; index++) {
    const c = returnRandomItemArrays(allChars)
    key = key + c
  }

  return key

}

function createArrayNumber(param) {

  let arrayRes = [];
  let init = 1;

  for (let index = 1; index <= param; index++) {
    arrayRes.push(init);
    init++;
  }

  return arrayRes

}

const thisInputFocusRemove = (param) => { param.classList.remove('outline', 'outline-blue-500/50', 'outline-offset-0') }
const thisInputFocus = (param) => { param.classList.add('outline', 'outline-blue-500/50', 'outline-offset-0') }

const thisInputTrueRemove = (param) => { param.classList.remove('outline', 'outline-green-500/50', 'outline-offset-0') }
const thisInputTrue = (param) => { param.classList.add('outline', 'outline-green-500/50', 'outline-offset-0') }

const thisInputFalseRemove = (param) => { param.classList.remove('outline', 'outline-red-500/50', 'outline-offset-0') }
const thisInputFalse = (param) => { param.classList.add('outline', 'outline-red-500/50', 'outline-offset-0') }

function myTextEllipsis(text = 'ceci est ma texte', limit = '11', ellipse = '.') {
  let newStr = ''
  if (text.length > limit) {
    for (let index = 0; index < limit; index++) {
      const char = text[index];
      newStr = newStr + char
    }
    newStr = newStr + ellipse + ellipse + ellipse
  } else {
    newStr = text
  }
  return newStr
}

export {
  truncateString,
  capitalizeFirstLettre,
  minTwoNumbers,
  CheckOrNot,
  IconWeb,
  stringToArray,
  generateRandomKey,
  generateRandomNumbers,
  returnRandomItemArrays,
  createArrayNumber,
  thisInputTrue,
  thisInputFalse,
  thisInputTrueRemove,
  thisInputFalseRemove,
  thisInputFocusRemove,
  thisInputFocus,
  myTextEllipsis,
}