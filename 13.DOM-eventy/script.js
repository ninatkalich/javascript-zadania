//zad1
const  tevent = document.getElementById('test-event');

tevent.addEventListener('click', (item)
 => { console.log(item);
 
}); 
    tevent.addEventListener('mousemove', (item) 
    => { console.log(item);
}); 

tevent.addEventListener('mouseenter', (item) 
=> {   console.log(item);

});

document.addEventListener('keydown', (item) 
=> {console.log(item.code);
});

document.addEventListener('scroll', (item)
 => { console.log(item);
});

document.getElementById('input-test').addEventListener('input', (item) 
=> {  console.log(item);
});

// zad2 

let klik = document.getElementById('ex2');


klik.addEventListener('click', (item) 
=> {
    ex2.nextElementSibling.textContent = item.target.getAttribute('data-text');
});

// zad3

let  kwadrat = document.getElementById('ex3');

kwadrat.addEventListener('mouseleave', (item) 
=> {     item.target.style.backgroundColor = 'red';
}); 

kwadrat.addEventListener('mouseenter', (item)
 => {
    item.target.style.backgroundColor = 'blue';
});

//zad4

let pole = document.getElementById('input-test'),
    blad = document.createElement('div');

blad.textContent = `liczba!!!`;

pole.addEventListener('input', (item) => {

    const tekst = item.target;

    blad.remove();

    tekst.style.border = '';

     if (tekst.value.match(/[0-9]/g)){

        pole.parentElement.append(blad);

    }
});


//zad5

//zad6

document.addEventListener('scroll', (item) => {
    if(window.scrollY > 200){
        document.querySelector('body').style.backgroundColor = 'red';
    } else {
        document.querySelector('body').style.backgroundColor = 'white';
    }
}); 

//zad7

const textArea = document.getElementById('calculator').querySelector('input');
const symbols = document.getElementById('calculator').querySelectorAll('button');

function add(a,b) {
  return a +b;
}
function subtrackt(a,b) {
  return a-b;
}
function mulit(a,b) {
  return a*b;
}
function divide(a,b) {
  return a/b;
}

function checkSign(value) {
  return Number.isNaN(parseInt(value)); 
}

function clearAllValue() {
   sign = null;
   firstValue = null;
   secondValue = null;
}

function count() {
  switch(sign){
    case "+":
        textArea.value=add(firstValue, secondValue);
        clearAllValue();
      break;
    case "-":
        textArea.value=subtrackt(firstValue, secondValue);
        clearAllValue();
      break;
    case "*":
        textArea.value=mulit(firstValue, secondValue);
        clearAllValue();
      break;
    case "/":
        textArea.value=divide(firstValue, secondValue);
        clearAllValue();
      break;
    default:
      clearAllValue();
      break;
  }
}

let firstValue = null;
let secondValue = null;
let sign  = null; 

symbols.forEach((el) => {
    el.addEventListener('click', ({target}) => {
      let value = target.textContent;
      if(checkSign(value)) {
        if(firstValue) {sign = value;}
      }
      else if(!sign && !firstValue) {
        firstValue=parseInt(value);
      }
      else if(sign && !secondValue) {
        secondValue=parseInt(value);
        count();
      }
    })
})

