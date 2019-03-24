const scientific = document.querySelector('.scientific')
const screen = document.querySelector('.calculator__display')
let screenEmpty = true
let operator = null
let lastNumber = null
let firstNumber = null
let operatorTemp = null
let lastNumberTemp = null

scientific.addEventListener('click', e => {
  if (e.target.classList.contains('button')) {
    const key = e.target
    const action = key.getAttribute('action');

    if (!action) {
      const number = getTextContentElement(key)
      // will execute when on screen print 0.
      if (screenEmpty) {
        screenEmpty = false;
        setDisplayScreen(number)
      } else {
        // add number and check validate number display start by zero
        if (number === ".") {
          setDisplayScreen(getDisplayScreen() + number)
        } else {
          setDisplayScreen(reduceZeroNumber(getDisplayScreen() + number))
        }
      }
    }

    if (action) {
      actions(action)
    }
  }
})

let actions = action => {
  switch (action) {
    case 'clear':
      clear()
      break
    case 'del':
      del()
      break
    case 'phi':
      setDisplayScreen(Math.PI)
      break
    case 'plus-min':
      lastNumber = plusMin(Number(getDisplayScreen()))
      setDisplayScreen(lastNumber)
      break
    case 'percent':
      lastNumber = percent(Number(getDisplayScreen()))
      setDisplayScreen(lastNumber)
      break
    case 'ln':
      lastNumber = ln(Number(getDisplayScreen()))
      setDisplayScreen(lastNumber)
      break
    case 'sqr':
      lastNumber = sqr(Number(getDisplayScreen()))
      setDisplayScreen(lastNumber)
      break
    case 'sqrt':
      lastNumber = sqrt(Number(getDisplayScreen()))
      setDisplayScreen(lastNumber)
      break
    case 'sin':
      lastNumber = sin(Number(getDisplayScreen()))
      setDisplayScreen(lastNumber)
      break
    case 'cos':
      lastNumber = cos(Number(getDisplayScreen()))
      setDisplayScreen(lastNumber)
      break
    case 'tan':
      lastNumber = tan(Number(getDisplayScreen()))
      setDisplayScreen(lastNumber)
      break
    case 'factorialize':
      lastNumber = factorialize(Number(getDisplayScreen()))
      setDisplayScreen(lastNumber)
      break
    case 'abs':
      lastNumber = abs(Number(getDisplayScreen()))
      setDisplayScreen(lastNumber)
      break
    default:
      /**
       *  when click same operator without input second number
       *  will use the last number for calculation
       */
      if (operatorTemp === operator) {
        lastNumber = lastNumberTemp
      }

      // will get lastNumber from screen when initialize data
      if (lastNumber === null) {
        lastNumber = Number(getDisplayScreen())
      }

      calculate(firstNumber, lastNumber, operator)
      if (lastNumber !== null) {
        setDisplayScreen(lastNumber)
        firstNumber = lastNumber
        lastNumber = null
      }
      if (action !== 'equal') {
        operator = action;
      }
      console.log(`condition: ${firstNumber} ${operator} ${lastNumber}`);
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

let getDisplayScreen = () => {
  return screen.textContent
}

let appendDisplayScreen = appendText => {
  screen.textContent += appendText
}

let calculate = (n1, n2, operator) => {
  if (n1 !== null && operator !== null) {
    switch (operator) {
      case 'add':
        lastNumber = add(n1, n2)
        break
      case 'subtract':
        lastNumber = subtract(n1, n2)
        break
      case 'multiply':
        lastNumber = multiply(n1, n2)
        break
      case 'divide':
        lastNumber = divide(n1, n2)
        break
      case 'exp':
        lastNumber = exp(n1, n2)
        break
    }
  }
  lastNumberTemp = n2
  operatorTemp = operator
  console.log(`${n1} ${operator} ${n2}`);
}

let clear = () => {
  setDisplayScreen('0.')
  screenEmpty = true
  firstNumber = null
  lastNumber = null
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

let reduceZeroNumber = numberText => {
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
  } else if (n1 == 0) {
    return 1;
  } else {
    return (n1 * factorialize(n1 - 1))
  }
}