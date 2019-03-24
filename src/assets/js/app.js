const scientific = document.querySelector('.scientific')
const screen = document.querySelector('.calculator__display')
let screenEmpty = true
let operator = null
let lastNumber = null
let firstNumber = null

scientific.addEventListener('click', e => {
  if (e.target.classList.contains('button')) {
    const key = e.target
    const action = key.getAttribute('action');
    console.log(key);

    if (!action) {
      const number = getTextContentElement(key)
      // will execute when on screen print 0.
      if (screenEmpty) {
        screenEmpty = false;
        setDisplay(number)
      } else {
        // add number and check validate number display start by zero
        setDisplay(reduceZeroNumber(getDisplay() + number))
      }
    }

    if (action) {
      actions(action)
    }
  }
})

let actions = action => {
  lastNumber = Number(getDisplay())

  switch (action) {
    case 'clear':
      clear()
      break
    case 'del':
      del()
      break
    case 'phi':
      setDisplay(Math.PI)
      break
    case 'plus-min':
      setDisplay(plusMin(lastNumber))
      break
    case 'percent':
      setDisplay(percent(lastNumber))
      break
    case 'ln':
      setDisplay(ln(lastNumber))
      break
    case 'sqr':
      setDisplay(sqr(lastNumber))
      break
    case 'sqrt':
      setDisplay(sqrt(lastNumber))
      break
    case 'sin':
      setDisplay(sin(lastNumber))
      break
    case 'cos':
      setDisplay(cos(lastNumber))
      break
    case 'tan':
      setDisplay(tan(lastNumber))
      break
    case 'factorialize':
      setDisplay(factorilize(lastNumber))
      break
    case 'abs':
      setDisplay(factorilize(lastNumber))
      break
    default:
      if (action !== 'equal') {
        operator = action;
      }
      let result = calculate(firstNumber, lastNumber, operator)
      console.log(result);
      if (typeof result !== 'undefined' && result !== null) {
        setDisplay(result)
      }
      break

  }

  // set display not concat the next number
  if (action !== 'del') {
    screenEmpty = true
  }
}

let setDisplay = displayText => {
  screen.textContent = displayText
}

let getDisplay = () => {
  return screen.textContent
}

let addDisplay = newText => {
  screen.textContent += newText
}

let clear = () => {
  setDisplay('0.')
  screenEmpty = true
  firstNumber = null
  lastNumber = null
}

let del = () => {
  setDisplay(getDisplay().slice(0, -1))
  if (getDisplay().length === 0 ||
    Number(getDisplay()) === 0) {
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
  return n2 - n1
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

let factorilize = n1 => {
  if (n1 < 0) {
    return -1;
  } else if (n1 == 0) {
    return 1;
  } else {
    return (n1 * factorialize(n1 - 1))
  }
}

let calculate = (n1, n2, operator) => {
  if (n1 !== null && operator !== null) {
    switch (operator) {
      case 'add':
        return add(n1, n2)
      case 'substract':
        return subtract(n1, n2)
      case 'multiply':
        return multiply(n1, n2)
      case 'divide':
        return divide(n1, n2)
      case 'exp':
        return exp(n1, n2)
      default:
        return null;
    }
  }
  firstNumber = lastNumber;
  lastNumber = 0
}