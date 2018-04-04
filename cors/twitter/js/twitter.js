'use strict';
const url = "https://neto-api.herokuapp.com/twitter/jsonp"
function randName() {
  function random(min, max) {
    const diff = max - min + 1;
    return Math.floor(Math.random() * diff) + min;
  }
  return `callback`;  
}

function show(user) {
  console.log(user)  
const target = document.querySelector('.user');
target.innerHTML = `${user}`;
}

function loadData(url) {
const functionName = randName();

return new Promise((done, fail) => {
window[functionName] = done;
const script = document.scripts[0].cloneNode();


script.src = "script.src = `${url}?jsonp=${functionName}`";
document.body.appendChild(script);


});
}
loadData(url).then(show)












/*
function loadData(url) {
return new Promise((done, fail) => {
});
}
*/




//script.src = `${url}?jsonp=${functionName}`;
//script.src = "https://neto-api.herokuapp.com/twitter/jsonp?=callback";



/*
function callback(book) {
console.log(book)  
const target = document.querySelector('.book');
target.innerHTML = `Книга ${book.description}, автор ${book.username}`
}
*/








//<script src="https://neto-api.herokuapp.com/twitter/jsonp"></script>

/*
const request = fetch('https://neto-api.herokuapp.com/twitter/jsonp', {

mode :'no-cors',
method: 'GET',
headers: {
'Content-Type': 'application/json'
}
}).then((res) => {
   return res
  }).then((res) => console.log(res))
  
  */
