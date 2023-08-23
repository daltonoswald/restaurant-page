// import './styles.css';
import dukeS from './duke.png';
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

    homeBtn.style.background = "#605444";
    homeBtn.style.color = "#fff";

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

    const dukeIcon = new Image();
    dukeIcon.src = dukeS;
    dukeIcon.classList.add('dukeImg');
    content.appendChild(dukeIcon);

    let blurbContainer = document.createElement('div');
    blurbContainer.classList.add('blurbContainer');
    content.appendChild(blurbContainer);

    let intro = document.createElement('p');
    intro.classList.add('blurbElement');
    intro.textContent = "Duke Sucellus Pizza Palace is the newest and coolest pizzeria in all of Weiss!";
    blurbContainer.appendChild(intro);

    let challenge = document.createElement('p');
    challenge.classList.add('blurbElement');
    challenge.textContent = "Try our Pizza Party Challenge! 3 Large Pineapple Pizzas, a 2L of Moutain Dew and a 2L of Starry!"
    blurbContainer.appendChild(challenge);

}