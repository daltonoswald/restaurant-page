import home from './home.js';
import menu from './menu.js';
export default function contact() {
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

    contactBtn.style.background = "#605444";
    contactBtn.style.color = "#fff";

    let titleElement = document.createElement('h1');
    titleElement.classList.add('title');
    titleElement.textContent = `Contact`;
    content.appendChild(titleElement);

    let duke = document.createElement('div');
    duke.classList.add('duke');
    duke.textContent = `Duke Sucellus`
    content.appendChild(duke);

    let phone = document.createElement('p');
    phone.classList.add('phone');
    phone.textContent = '555-555-5555'
    duke.appendChild(phone);

    let email = document.createElement('p');
    email.classList.add('email');
    email.textContent = 'DukeSuce@pizzapalace.com';
    duke.appendChild(email);

}