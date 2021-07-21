const welcomeDiv = document.createElement('div');
const tellMeDiv = document.createElement('div');
welcomeDiv.innerText = 'Welcome To Nation Prediction!';
tellMeDiv.innerText = 'Tell me your Name? I will tell about you!';

const nameInput = document.createElement('input');
nameInput.setAttribute('id', 'name');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Enter you Name here')
nameInput.setAttribute('required', 'true');

const readyButton = document.createElement('button');
readyButton.setAttribute('onclick', 'getData()');
readyButton.innerText = 'Tell about me';


const myform = document.createElement('form')
myform.setAttribute('id', 'form')
myform.append(nameInput, readyButton)

document.body.append(welcomeDiv, tellMeDiv, myform);
// let dummy = document.getElementById('name').value;
function getData() {
  fetch(`https://api.nationalize.io?name=kumar`)
    .then((res) => res.json())
    .then((data) => console.log(data));
}

const result = document.createElement('div')
result.setAttribute('class', 'result')
const resultHeading = document.createElement('h4')
resultHeading.innerText = `Hi, ${data.name}, your are probably from`