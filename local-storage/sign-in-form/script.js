'use strict'

var signIn = document.querySelector('.sign-in-htm');
var signUp = document.querySelector('.sign-up-htm');
const buttons = Array.from(document.querySelectorAll('.button'));
//const tabs = Array.from(document.querySelectorAll('.tab'));

const [entrance, checkin] = buttons;



function register(){
  const xhr = new XMLHttpRequest();
  const formData = new FormData(signUp);
  xhr.open('POST', 'https://neto-api.herokuapp.com/signup');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(formData);
  
}
function enter(){
  const xhr1 = new XMLHttpRequest();
  const formData1 = new FormData(signIn);
  xhr1.open('POST', 'https://neto-api.herokuapp.com/signin');
  xhr1.setRequestHeader('Content-Type', 'application/json');
  xhr1.send(formData1);
 

  
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







