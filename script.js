const welcomeDiv = document.createElement('div');
const tellMeDiv = document.createElement('div');
welcomeDiv.innerText = 'Welcome To Nation Prediction!';
tellMeDiv.innerText = 'Tell us your Name! We will tell about you!';

const nameInput = document.createElement('input');
nameInput.setAttribute('id', 'name');
nameInput.setAttribute('name', 'name');
nameInput.setAttribute('type', 'text');
nameInput.setAttribute('placeholder', 'Enter you Name here')
nameInput.setAttribute('required', 'true');

const readyButton = document.createElement('button');
readyButton.setAttribute('onclick', 'getData()');
readyButton.setAttribute('type', 'button');
readyButton.setAttribute('return', 'false');
readyButton.innerText = 'Tell about me';


const myform = document.createElement('form')
myform.setAttribute('id', 'form')
myform.append(nameInput, readyButton)


const result = document.createElement('div')
result.setAttribute('id', 'result')
result.setAttribute('class', 'on-result')

const footer = document.createElement('footer')
footer.setAttribute('id', 'footer')

footer.innerText = 'Courtesy: Nationalize.io An API for predicting nationality from a Name'

document.body.append(welcomeDiv, tellMeDiv, myform, result, footer);

function getData() {
  let query = document.getElementById('name').value;
  if (query.length === 0) {
    alert('Please enter your name')
  } else if (query.length === 1) {
    alert('Very rare Name with single character')
    fetch(`https://api.nationalize.io?name=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.country.length == 3) {
          document.getElementById('result').innerHTML = `
      <div class="on-result">Hi ${data.name}, Greetings!</div> 
      We pridicted that you are from one of countries below</div> 
      <div class="on-result">1. ${data.country[0].country_id} with the probablity of ${((data.country[0].probability).toFixed(5))}</div>
      <div class="on-result">2. ${data.country[1].country_id} with the probablity of ${((data.country[1].probability).toFixed(5))}</div>
      <div class="on-result">3. ${data.country[2].country_id} with the probablity of ${((data.country[2].probability).toFixed(5))}</div>`
        } else {
          document.getElementById('result').innerHTML = `
    <div class="no-result">Hi ${data.name}, Greetings!</div> 
    <div class="no-result">We are unable to pridict about your country</div> `
        }
      })
  }
  else {
    fetch(`https://api.nationalize.io?name=${query}`)
      .then((res) => res.json())
      .then((data) => {
        if (data.country.length == 3) {
          document.getElementById('result').innerHTML = `
        <div class="on-result">Hi ${data.name}, Greetings!</div> 
        We pridicted that you are from one of countries below</div> 
        <div class="on-result">1. ${data.country[0].country_id} with the probablity of ${((data.country[0].probability).toFixed(5))}</div>
        <div class="on-result">2. ${data.country[1].country_id} with the probablity of ${((data.country[1].probability).toFixed(5))}</div>
        <div class="on-result">3. ${data.country[2].country_id} with the probablity of ${((data.country[2].probability).toFixed(5))}</div>`
        } else {
          document.getElementById('result').innerHTML = `
      <div class="no-result">Hi ${data.name}, Greetings!</div> 
      <div class="no-result">We are unable to pridict about your country</div> `
        }
      })

  }
}
