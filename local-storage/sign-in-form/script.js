'use strict'

var signIn = document.querySelector('.sign-in-htm');
var signUp = document.querySelector('.sign-up-htm');
const buttons = Array.from(document.querySelectorAll('.button'));
//const tabs = Array.from(document.querySelectorAll('.tab'));

const [entrance, checkin] = buttons;



function register(){
  let xhr = new XMLHttpRequest();
  const formData = new FormData(signUp);
  xhr.open('POST', 'https://neto-api.herokuapp.com/signup', false);
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify(formData));
  
  xhr.open("POST", 'https://neto-api.herokuapp.com/signup', false);
  xhr.send();
  console.log(`Ответ от сервера: ${xhr.responseText}`);
  
}
function enter(){
  let xhr1 = new XMLHttpRequest();
  const formData1 = new FormData(signIn);
  xhr1.open('POST', 'https://neto-api.herokuapp.com/signin', false);
  xhr1.setRequestHeader('Content-Type', 'application/json');
  xhr1.send(JSON.stringify(formData1));
 
  xhr1.open("POST", 'https://neto-api.herokuapp.com/signin', false);
  xhr1.send();
  console.log(`Ответ от сервера: ${xhr1.responseText}`);
  
}
function buttonHandler(event) {
	
	console.log(event.target);
	event.preventDefault();
	switch(event.target){
		case entrance : {console.log('here11111');enter()}; break;
		case checkin : {console.log('here11111');register()};break;
	}
}


 buttons.forEach(value => {
	 
	 value.addEventListener('click', buttonHandler)
 })






