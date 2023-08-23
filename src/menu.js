import home from './home.js';
import contact from './contact.js';
import pineapplePizzaImg from './pineapplepizza.png';
import anchovyPizzaImg from './anchovypizza.png';

export default function menu() {
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
    titleElement.textContent = `Menu`;
    content.appendChild(titleElement);

    let pineapplePizza = document.createElement('div');
    pineapplePizza.classList.add('menuItem');
    pineapplePizza.textContent = `Pineapple Pizza`;
    content.appendChild(pineapplePizza);

    const myPineapplePizza = new Image();
    myPineapplePizza.src = pineapplePizzaImg;
    myPineapplePizza.classList.add('pizzaImg');
    pineapplePizza.appendChild(myPineapplePizza);

    let pineapplePizzaDetails = document.createElement('p');
    pineapplePizzaDetails.classList.add('menuDetails');
    pineapplePizzaDetails.textContent = `Our signature dish using the finest pineapples imported fresh from Brimhaven and fresh Culinaromancer cheese.`;
    pineapplePizza.appendChild(pineapplePizzaDetails);

    let pineapplePizzaPrice = document.createElement('p');
    pineapplePizzaPrice.classList.add('price');
    pineapplePizzaPrice.textContent = '$22.65'
    pineapplePizza.appendChild(pineapplePizzaPrice);


    let anchovyPizza = document.createElement('div');
    anchovyPizza.classList.add('menuItem');
    anchovyPizza.textContent = `Anchovy Pizza`;
    content.appendChild(anchovyPizza);

    const myAnchovyPizza = new Image();
    myAnchovyPizza.src = anchovyPizzaImg;
    myAnchovyPizza.classList.add('pizzaImg');
    anchovyPizza.appendChild(myAnchovyPizza);

    let anchovyPizzaDetails = document.createElement('p');
    anchovyPizzaDetails.classList.add('menuDetails');
    anchovyPizzaDetails.textContent = 'A hometown favorite, topped with anchovies caught off the coast of the Barbarian Outpost and fresh Culinaromancer cheese.';
    anchovyPizza.appendChild(anchovyPizzaDetails);

    let anchovyPizzaPrice = document.createElement('p');
    anchovyPizzaPrice.classList.add('price');
    anchovyPizzaPrice.textContent = '$18.55';
    anchovyPizza.appendChild(anchovyPizzaPrice);



}