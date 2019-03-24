# devc-basic-js
Learn more about basic html, css and js with expert on devc community Jakarta.

## Exercise 1: Introduce html and css
![screenshot cv](sc-cv.png "exercise 1 introduce html and css")

## Exercise 2: Basic js and DOM manipulation
###### click image to preview functionality
[![screenshot cv](sc-calculator.png "click to preview")](https://vendywira.github.io/devc-basic-js/src/index.html)


## Sass what is this??
when stylesheets are getting larger, more complex,
 and harder to maintain. we need sass for this condition. 
What is Sass? Sass is preprocessor which will help you to maintenance your css. we can use function, inheritance and
 operator like programming language.
 for implement sass on our project, we should be install node js and sass.
And then type command like bellow to auto compile scss to css when any changes.
```sass
sass --watch style.scss style.css
```

for more detail about sass you can read their documentation at [sass guideline](https://sass-lang.com/guide)

## BEM (Block Element Modifiers)
Convention for class naming on css to readable. For more detail you can read on [bem official website](http://getbem.com/introduction/)

## Basic DOM 
on exercise 2 we learn about basic js and how DOM work. we can use dom to manipulating view on html.

```javascript
const scientific = document.querySelector('.scientific')
const screen = document.querySelector('.calculator__display')
...

// we can also give action when user interact with dom like bellow

scientific.addEventListener('click', e => {
  if (e.target.classList.contains('button')) {
    const key = e.target
    const action = key.getAttribute('action');

    if (!action) {
      const number = getTextContentElement(key)
      if (displayNumber === null && displayNumberTemporary !== null) {
        isTypeSecondNumber = true
      }
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
```
