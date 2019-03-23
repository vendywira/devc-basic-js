const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')

console.log(keys);
keys.addEventListener('click', e => {
  if (e.target.matches('button')) {
    // Do something
  }
})