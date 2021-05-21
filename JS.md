# AJAX - Asynchronous JavaScript And XML

**Props:**

- Read data from a web server - after the page has loaded
- Update a web page without reloading the page
- Send data to a web server - in the background

**Using AJAX:**

- XMLHttpRequest()
- fetch
- Jquery

**Example:**

- **XMLHttpRequest**

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>The XMLHttpRequest Example</h2>
    <button type='button' onclick='loadDoc()'>Umbala</button>
    <div id='demo'></div>

    <script>
      function loadDoc() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
            document.getElementById('demo').innerHTML = `<img src='${
              JSON.parse(this.responseText)[0].url
            }'/>`;
          }
        };
        xhttp.open('GET', 'https://api.thecatapi.com/v1/images/search', true);
        xhttp.send();
      }
    </script>
  </body>
</html>
```

- **Fetch**

```html
<!DOCTYPE html>
<html>
  <body>
    <h2>The Fetch Example</h2>
    <button type='button' onclick='loadDoc()'>Umbala</button>
    <div id='demo'></div>

    <script>
      function loadDoc() {
        fetch('https://api.thecatapi.com/v1/images/search')
          .then((response) => response.json())
          .then((data) => {
            console.log(data);
            document.getElementById(
              'demo'
            ).innerHTML = `<img src='${data[0].url}'/>`;
          });
      }
    </script>
  </body>
</html>
```

- **JQuery**

```html
<!DOCTYPE html>
<html>
  <head> </head>
  <body>
    <div id='demo'>
      <h2>The AJAX Example</h2>
      <button type='button'>Change Content</button>
    </div>

    <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>
    <script>
      $(document).ready(function () {
        $('button').click(function () {
          $.get(
            'https://api.thecatapi.com/v1/images/search',
            function (data, status) {
              $('#demo img').remove();
              $('#demo').append(`<img src='${data[0].url}'/>`);
            }
          );
        });
      });
    </script>
  </body>
</html>
```

**Refs:**
[Hand-on AJAX](https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX/Getting_Started)
[Jquery](https://www.w3schools.com/jquery)

# DOM Element

_In the HTML DOM, the Element object represents an HTML element, like P, DIV, A, TABLE, or any other HTML element._

```html
<!DOCTYPE html>
<html>
  <body>
    <p id='demo'>Click the button to change the text in this paragraph.</p>

    <button onclick='myFunction()'>Try it</button>

    <script>
      function myFunction() {
        document.getElementById('demo').innerHTML = 'Hello World';
      }
    </script>
  </body>
</html>
```

**Refs:**
[Properties and methods](https://developer.mozilla.org/en-US/docs/Web/API/Element)


# ES6

- **Variable scope**

**`let`** is effectively the new var. It is only present within the corresponding Block.
```js
function foo() {
  for(let i = 0; i < 9; i++) {
    console.log(i) // 0 1 2 3 4 5 6 7 8 9
  }
  console.log(i) //undefined
}
```

**`const`** defines a constant. That is it can not be re-assigned.
```js

const obj = {
  name: 'HoverBaum'
}
obj.name = 'Tester' //works
obj.awesome = true //also okay
obj = [] //NOPE, this is an error
```

- **[Arrow Functions](https://www.javascripttutorial.net/es6/javascript-arrow-function/)**
```js

// old version
function foo() {
  return 'bar'
}

//new version
let foo = ()=> 'bar'
```

- **[Destructuring](https://www.javascripttutorial.net/es6/destructuring/)**

```js
// We can now get Objects out of other

let {a, b} = {
  a: 1,
  b: 2
}
console.log(a) // 1
function foo ({greeting, name}) {
  console.log(greeting + ' ' + name)
}
foo({name: 'Sang handsome', greeting: 'Hello'})
```

- **[Modules](https://www.javascripttutorial.net/es6/es6-modules/)**

We can now `import` things from modules that `exported` them.
```js
//app.js
//import the default export from logger
import log from './logger'
//only import a from letters
import { a } from './letters'
log(a) // 1


//logger.js
export default const log = (msg) => {
  console.log(msg)
}


//letters.js
export const a = 1
export const b = 2
```

- **[String Template](https://www.javascripttutorial.net/es6/javascript-template-literals/)**

```js
function greet(greeting, name) {
  console.log(`${greeting} ${name}, nice to see you.`)
}
```

- **[Default Parameters](https://www.javascripttutorial.net/es6/javascript-default-parameters/)**
```js
//Old way
function greet(greeting, name) {
  if(!greeting) {
     greeting = 'Hello'
  }
  if(!name) {
    name = 'Friend'
  }
  console.log(`${greeting} ${name}.`)
}


//ES6 Default Paramteres
function greeti(greeting = 'Hello', name = 'Friend') {
  console.log(`${greeting} ${name}.`)
}
```

- **[Object.assign](https://www.javascripttutorial.net/es6/javascript-object-assign/)**

Using Object.assign allows us to create a new Object and pass in other Objects.

```js
const obj = {
  a: 1,
  b: 2
}
const newObj = Object.assign({}, obj, {
  b: 13
})
/*
newObj == {
  a: 1,
  b: 13
}
*/
```
- **[Spread Operator](https://www.javascripttutorial.net/es6/javascript-spread/)**

```js
const odd = [1,3,5];
const combined = [2,4,6, ...odd];
console.log(combined);
```

**Refs:**
[Docs](https://www.javascripttutorial.net/es6/)



