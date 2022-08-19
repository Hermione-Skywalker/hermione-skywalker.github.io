// This is a comment.

/*
  This is also a comment.
*/

function multiply(num1,num2) {
    let result = num1 * num2;
    return result;
  }

/*
let myHTML = document.querySelector('html');
myHTML.addEventListener('click', function () {
  alert('Ouch! Stop poking me!');
});
*/

const myImage = document.querySelector('img');

myImage.onclick = () => {
  const mySrc = myImage.getAttribute('src');
  if (mySrc === 'images/Walle9.jpg') {
    myImage.setAttribute('src','images/Walle9_2.jpg');
  } else {
    myImage.setAttribute('src','images/Walle9.jpg');
  }
}



let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  const myName = prompt('Please enter your name.');
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = `Hello, ${myName}`;
  }
}


if (!localStorage.getItem('name')) {
  setUserName();
} else {
  const storedName = localStorage.getItem('name');
  myHeading.textContent = `Hello, ${storedName}`;
}

myButton.onclick = () => {
  setUserName();
}