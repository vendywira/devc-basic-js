const scientific = document.querySelector('.scientific')
const screen = document.querySelector('.calculator__display')
let screenEmpty = true

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

let calculate = () => {

}