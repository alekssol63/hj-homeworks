'use strict'
 const tab = Array.from(document.getElementsByTagName('a'));
 const [tabEmail, tabSms] = tab;
 const content = document.getElementById('content');
 const preloader = document.getElementById('preloader');
 
 function onLoadStart() {
   preloader.classList.toggle('hidden');
}
function onLoadEnd() {
  preloader.classList.toggle('hidden');
}

function addXhrListeners(){
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("loadstart", onLoadStart);
  xhr.addEventListener("loadend", onLoadEnd);
  xhr.addEventListener("load", () => content.innerHTML = xhr.responseText);
  return xhr;
}
 
function onStart(){
  let xhr =  addXhrListeners()
  xhr.open("GET", "components/email-tab.html", true);
  xhr.send();
}
      
function loadForm(event) {
  event.preventDefault();
  let xhr =  addXhrListeners();
  xhr.open("GET", event.target.href, true);
  xhr.send();
  switch (event.target) {
    case tabEmail : {
      if (tabSms.classList.contains('active')){
        tabSms.classList.remove('active');
        event.target.classList.add('active');
      }
    }
    break;
    case tabSms : {
      if (tabEmail.classList.contains('active')) {
        tabEmail.classList.remove('active');
        event.target.classList.add('active');
      }
    }
    break;
  }
}

onStart();
tab.forEach(value => value.addEventListener('click', loadForm));