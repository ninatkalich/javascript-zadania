//zad 1
let lista = wyswielt_elementy('more-divs');


function wyswielt_elementy(klasa) {
    let lista = document.querySelectorAll(`.${klasa}`),
        elementy = [];

    lista.forEach(el => {
        elementy.push(el.tagName);
      
    });

    return elementy;
}

console.log(lista);

//zad 2

function pokaz(element) {
    const skladnik = document.querySelector(`.${element}`);

    console.log(skladnik.innerHTML);
    console.log(skladnik.outerHTML);
    console.log(skladnik.className);
    console.log(skladnik.classList);
    console.log(skladnik.dataset);
}

pokaz('short-list'); 

// zad4

document.getElementById('spanText').textContent = 'dowolny';

//zad5

document.getElementById('spanText').className = 'bylejaka';

// zad7

let element = document.querySelectorAll('#longList > li');

element.forEach(el => {
    if (!el.getAttribute('data-test')) {
        el.dataset.text = 'text';
    }
});

console.log(element); 

//zad 10

function wypeln(index) {
    const element = document.querySelectorAll(`#${index} li`),
        tab = [];
    console.log(element);
    element.forEach(el => {
        tab.push(el.textContent);
    });
    return tab;
}

//zad 11

function losowanie(lista) {
    lista.forEach(el => {
        let zmiena = Math.floor(Math.random() * 10);
        el.dataset.number = el.textContent;
        el.textContent = zmiena;
    });
}

const tab = document.querySelectorAll('#longList li');
losowanie(tab);
