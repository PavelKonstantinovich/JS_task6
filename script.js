// Задание №1

const listElement = document.querySelector('ul')

document.querySelector('input').addEventListener('keydown', function (event) {
  const liElement = document.createElement('li')
  listElement.append(liElement)
  liElement.textContent = event.key
})


// Задание №2

let input = document.querySelector('input')
input.addEventListener('keyup', () => console.log(input.value))

document.querySelector('input').addEventListener('keyup', () =>
  document.querySelector('div').textContent = 'Клиент набирает: ' + input.value
)

// Задание №3

// const [formElement, inputElement, ulElement] = [document.createElement('form'), document.createElement('input'), document.createElement('ul')]
// document.body.before(formElement)
// document.body.prepend(ulElement)
// formElement.append(inputElement)

// const submitElement = document.createElement('input')
// submitElement.setAttribute('type', 'submit')
// formElement.append(submitElement)
// submitElement.value = 'Нажать'

// formElement.addEventListener('submit', function (event) {
//   event.preventDefault()
//   const liElement = document.createElement('li')
//   ulElement.append(liElement)
//   const inputElementValue = formElement.querySelector('input')
//   liElement.textContent = inputElementValue.value
//   inputElementValue.value = ''
// })

// Задание №4

document.querySelector('form').addEventListener('submit', function(event) {
  event.preventDefault();
  const input = event.target.querySelector('.expression');
  const result = eval(input.value);
  document.querySelector('.result').textContent = result;
  input.value = '';
})

let showResult = (event) => {
  event.preventDefault();
  let p = document.createElement('p');
  let input = event.target.querySelector('input');
  p.textContent = eval(input.value);
  document.body.append(p);
  input.value = '';
}

document.querySelector('form').addEventListener('submit', showResult);