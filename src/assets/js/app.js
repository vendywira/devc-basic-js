const scientific = document.querySelector('.scientific')
const display = document.querySelector('.calculator__display')
scientific.addEventListener('click', e => {
  if (e.target.classList.contains('button')) {
    const key = e.target
    const action = key.getAttribute('action');
    console.log(key);

    if (!action) {
      console.log('number key!')
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

let clear = () => {

}

let del = () => {

}

let calculate = () => {

}