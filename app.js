
const myLinks = document.querySelectorAll('a');

for (let link of myLinks) {
    link.innerText = 'I am a Link';
    link.style.color = 'teal';
    link.style.textDecorationStyle = 'wavy';
    link.style.textDecorationColor = 'magenta'
}

// access the attribute using the method: getAttribute()
const links = document.querySelector('a');
links.getAttribute('href');
links.href;

// you can also set attribute
links.setAttribute('href', 'http://www.google.com');
// change style from javascript
const header = document.querySelector('h1');
header.style.fontSize = "3em";

// in order to obtain the specific style for an h1
window.getComputedStyle(header);

//excercise: rainbow color
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// if (i = 0, i < colors.length, i++) {
//     console.log(colors[i]);
// 

const h2 = document.querySelector('h2');
h2.classList.add('purple');

//parentelement, children, nextsibling,previous sibling, nexelementsibling and previouselementsibling.
//lesson 252 Append and appendchild:

const newImg = document.createElement('img');

newImg.setAttribute('src', 'https://images.unsplash.com/photo-1612051259312-eeff731fee07?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80');
