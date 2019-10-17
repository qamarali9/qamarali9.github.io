let myImage = document.querySelector('img');

myImage.onclick = function(){
	if(myImage.getAttribute('src') === "images/index-without-copyright.png"){
		myImage.setAttribute('src',"images/index.png")
	} else {
		myImage.setAttribute('src', "images/index-without-copyright.png")
	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h3');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(myName === '' || myName === null){
    	setUserName();
    } else {
    	localStorage.setItem('name', myName);
    	myHeading.textContent = 'Test web-page created using Mozilla Developer Network resources. Welcome, ' + myName;
    }
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'Test web-page created using Mozilla Developer Network resources. Welcome, ' + storedName;
}

myButton.onclick = function(){
	setUserName();
}