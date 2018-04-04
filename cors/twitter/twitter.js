
'use strict';
const container = document.querySelector('.container').querySelectorAll('*');

const url = "https://neto-api.herokuapp.com/twitter/jsonp"
function randName() {
  function random(min, max) {
    const diff = max - min + 1;
    return Math.floor(Math.random() * diff) + min;
  }
  return `callback`;  
}

function show(user) {
  for(let element of container) {
    if (element.hasAttribute('data-wallpaper')) {
      element.src = user.wallpaper;
    } else if (element.hasAttribute('data-username')) {
      element.innerText = user.username;
    } else if (element.hasAttribute('data-description')) {
      element.innerText = user.description;
    } else if (element.hasAttribute('data-pic')) {
      element.src = user.pic;
    } else if (element.hasAttribute('data-tweets')) {
      element.innerText = user.tweets;
    } else if (element.hasAttribute('data-followers')) {
      element.innerText = user.followers;
    } else if (element.hasAttribute('data-following')) {
      element.innerText = user.following;
    } 
  }
}

function loadData(url) {
const functionName = randName();

return new Promise((done, fail) => {
window[functionName] = done;
const script = document.scripts[0].cloneNode();

script.src = `${url}?jsonp=${functionName}`;
document.body.appendChild(script);

});
}
loadData(url).then(show)
