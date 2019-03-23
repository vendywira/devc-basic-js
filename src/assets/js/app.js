const scientific = document.querySelector('.scientific')
const screen = document.querySelector('.calculator__display')
let screenEmpty = true
let operator = null;
let number1 = 0
let number2 = 0

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
  switch (action) {
    case 'clear':
      clear()
      break
    case 'equal':
      calculate()
      break
    case 'del':
      del()
      break
    case 'phi':
      addDisplay(Math.PI)
      break
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
  screenEmpty = true
  setDisplay('0.')
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

let exponent = (n1, n2) => {
  return Math.pow(n1, n2)
}

let ln = n1 => {
  return Math.ln(n1)
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

let calculate = (n1, operator, number2) => {

}