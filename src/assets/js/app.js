const scientific = document.querySelector('.scientific')
const screen = document.querySelector('.calculator__display')
let screenEmpty = true
let operator = null
let displayNumber = null
let displayNumberTemporary = null
let secondaryNumberTemp = null
let isTypeSecondaryNumber = false

scientific.addEventListener('click', e => {
  if (e.target.classList.contains('button')) {
    const key = e.target
    const action = key.getAttribute('action');
    if (!action) {
      typeNumber(getTextContentElement(key))
    } else {
      calculateOperation(action)
    }
  }
})

let typeNumber = number => {
  if (displayNumber === null && displayNumberTemporary !== null) {
    isTypeSecondaryNumber = true
  }
  // will execute when on screen print clear
  if (screenEmpty) {
    screenEmpty = false;
    if (number === ".") {
      appendDisplayScreen(number)
    } else {
      setDisplayScreen(number)
    }
  } else {
    // validation for add . only 1
    if (number === "." && !getDisplayScreen().includes(".")) {
      appendDisplayScreen(number)
    } else if (number !== ".") {
      // allow 0 if the number is decimal
      if (getDisplayScreen().includes(".")) {
        appendDisplayScreen(number)
      } else {
        // add number and check validate number display start by zero
        setDisplayScreen(validateRightNumber(getDisplayScreen() + number))
      }
    }
  }
}

let calculateOperation = action => {
  switch (action) {
    case 'clear':
      clear()
      break
    case 'del':
      del()
      break
    case 'phi':
      if (displayNumber === null && displayNumberTemporary !== null) {
        isTypeSecondaryNumber = true
      }
      displayNumber = Math.PI
      setDisplayScreen(displayNumber)
      break
    case 'plus-min':
      displayNumber = plusMin(Number(getDisplayScreen()))
      setDisplayScreen(displayNumber)
      break
    case 'percent':
      displayNumber = percent(Number(getDisplayScreen()))
      setDisplayScreen(displayNumber)
      break
    case 'ln':
      displayNumber = ln(Number(getDisplayScreen()))
      setDisplayScreen(displayNumber)
      break
    case 'sqr':
      displayNumber = sqr(Number(getDisplayScreen()))
      setDisplayScreen(displayNumber)
      break
    case 'sqrt':
      displayNumber = sqrt(Number(getDisplayScreen()))
      setDisplayScreen(displayNumber)
      break
    case 'sin':
      displayNumber = sin(Number(getDisplayScreen()))
      setDisplayScreen(displayNumber)
      break
    case 'cos':
      displayNumber = cos(Number(getDisplayScreen()))
      setDisplayScreen(displayNumber)
      break
    case 'tan':
      displayNumber = tan(Number(getDisplayScreen()))
      setDisplayScreen(displayNumber)
      break
    case 'factorialize':
      displayNumber = factorialize(Number(getDisplayScreen()))
      setDisplayScreen(displayNumber)
      break
    case 'abs':
      displayNumber = abs(Number(getDisplayScreen()))
      setDisplayScreen(displayNumber)
      break
    default:
      if (!isTypeSecondaryNumber && operator !== null) {
        displayNumber = netralNumber(operator)
      }

      // will get lastNumber from screen when initialize data
      if (displayNumber === null) {
        displayNumber = Number(getDisplayScreen())
      }

      calculate(displayNumberTemporary, displayNumber, operator)
      if (displayNumber !== null) {
        setDisplayScreen(displayNumber)
        displayNumberTemporary = displayNumber
        isTypeSecondaryNumber = false
        displayNumber = null
        operator = null
      }
      if (action !== 'equal') {
        operator = action;
      }
      console.log(`condition: ${displayNumberTemporary} ${operator} ${displayNumber}`);
      break
  }

  // set display disable append the next number
  if (action !== 'del') {
    screenEmpty = true
  }
}

let setDisplayScreen = displayText => {
  screen.textContent = displayText
}

let appendDisplayScreen = displayText => {
  screen.textContent += displayText
}

let getDisplayScreen = () => {
  return screen.textContent
}

let calculate = (n1, n2, operator) => {
  if (n1 !== null && operator !== null) {
    switch (operator) {
      case 'add':
        displayNumber = add(n1, n2)
        break
      case 'subtract':
        displayNumber = subtract(n1, n2)
        break
      case 'multiply':
        displayNumber = multiply(n1, n2)
        break
      case 'divide':
        displayNumber = divide(n1, n2)
        break
      case 'exp':
        displayNumber = exp(n1, n2)
        break
    }
  }
  console.log(`${n1} ${operator} ${n2}`);
}

let clear = () => {
  setDisplayScreen('0')
  screenEmpty = true
  displayNumberTemporary = null
  displayNumber = null
  lastNumberTemp = null
  operator = null
}

let del = () => {
  setDisplayScreen(getDisplayScreen().slice(0, -1))
  if (getDisplayScreen().length === 0 ||
    Number(getDisplayScreen()) === 0 ||
    screenEmpty) {
    clear()
  }
}

let getTextContentElement = e => {
  return e.textContent
}

let validateRightNumber = numberText => {
  return Number(numberText).toString()
}

let add = (n1, n2) => {
  return n1 + n2
}

let subtract = (n1, n2) => {
  return n1 - n2
}

let multiply = (n1, n2) => {
  return n1 * n2
}

let divide = (n1, n2) => {
  return n1 / n2
}

let percent = n1 => {
  return n1 / 100
}

let exp = (n1, n2) => {
  return Math.pow(n1, n2)
}

let ln = n1 => {
  result = Math.log(n1)
  return isNaN(result) ? 0 : result
}

let sqrt = n1 => {
  return Math.sqrt(n1)
}

let sqr = n1 => {
  return Math.pow(n1, 2)
}

let sin = n1 => {
  return Math.sin(n1)
}

let cos = n1 => {
  return Math.cos(n1)
}

let tan = n1 => {
  return Math.tan(n1)
}

let plusMin = n1 => {
  return n1 * -1
}

let abs = n1 => {
  return Math.abs(n1)
}

let factorialize = n1 => {
  if (n1 < 0) {
    return -1;
  } else if (n1 === 0) {
    return 1;
  } else {
    return (n1 * factorialize(n1 - 1))
  }
}

let netralNumber = operator => {
  if (operator === 'add' || operator === 'subtract') {
    return 0
  }
  return 1
}