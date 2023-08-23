// import './styles.css';
import pineapplePizzaImg from './pineapplepizza.png';
import menu from './menu.js';
import contact from './contact.js';
export default function home() {
    const content = document.getElementById('content');
    content.textContent = "";

    let buttons = document.createElement('div');
    buttons.classList.add('navBtnGroup');
    content.appendChild(buttons);

    let homeBtn = document.createElement('button');
    homeBtn.classList.add('navBtn');
    homeBtn.textContent = `Home`;
    homeBtn.onclick = home;
    buttons.appendChild(homeBtn);

    let menuBtn = document.createElement('button');
    menuBtn.classList.add('navBtn');
    menuBtn.textContent = `Menu`;
    menuBtn.onclick = menu;
    buttons.appendChild(menuBtn);

    let contactBtn = document.createElement('button');
    contactBtn.classList.add('navBtn');
    contactBtn.textContent = `Contact`;
    contactBtn.onclick = contact;
    buttons.appendChild(contactBtn);

    let titleElement = document.createElement('h1');
    titleElement.classList.add('title');
    titleElement.textContent = `Duke Sucellus Pizza Palace`;
    content.appendChild(titleElement);

    const myPineapplePizza = new Image();
    myPineapplePizza.src = pineapplePizzaImg;
    myPineapplePizza.classList.add('pizzaImg');
    content.appendChild(myPineapplePizza);

    let blurbElement = document.createElement('div');
    blurbElement.classList.add('blurbElement');
    blurbElement.textContent = "Duke Sucellus Pizza Palace is the newest and coolest pizzeria in all of Weiss!"
    content.appendChild(blurbElement);

}