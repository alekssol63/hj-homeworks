'use strict';
//const container = document.querySelector('.container').querySelectorAll('*');


let url = "https://neto-api.herokuapp.com/profile/me"
function randName() {
  function random(min, max) {
    const diff = max - min + 1;
    return Math.floor(Math.random() * diff) + min;
  }
  return `callback`;  
}
var flag = false;
function show(user) {
	
	console.log(user)
/*	for(let element of container) {
	  if (element.hasAttribute('data-wallpaper')) {
	    element.src = user.wallpaper;
	  } else if (element.hasAttribute('data-username')) {
	    element.innerText = user.username;
	  } else if	(element.hasAttribute('data-description')) {
	    element.innerText = user.description;
	  } else if	(element.hasAttribute('data-pic')) {
	    element.src = user.pic;
	  } else if	(element.hasAttribute('data-tweets')) {
	    element.innerText = user.tweets;
	  } else if	(element.hasAttribute('data-followers')) {
	    element.innerText = user.followers;
	  } else if	(element.hasAttribute('data-following')) {
	    element.innerText = user.following;
	  } 
    }
*/	
}

function loadData(url) {
const functionName = randName();

return new Promise((done, fail) => {
window[functionName] = done;
let script = document.scripts[0].cloneNode();
 console.log(script)
if (!flag) {
 
  script.src = `${url}?callback=${functionName}`;
  document.body.appendChild(script);
} else {
  let scripts = document.querySelectorAll('script')	
  document.scripts[1].parentNode.removeChild(scripts[1])
  scripts = document.querySelectorAll('script')
 
  document.scripts[1].parentNode.removeChild(scripts[1])
  script.src = `https://neto-api.herokuapp.com/profile/90210/technologies?callback=${functionName}`; 	
  document.body.appendChild(script);
 
  
}
 console.log(document.body)


});
}
loadData(url).then(show);
flag = true;
loadData(url).then(show);

//<script src="https://neto-api.herokuapp.com/profile/90210/technologies"></script>
