//zad 1 
console.log(document.getElementById('buz').parentElement);
console.log(document.getElementById('baz').previousElementSibling);
console.log(document.getElementById('foo').children);
console.log(document.getElementById('foo').parentElement);
console.log(document.getElementById('foo').firstElementChild);
console.log(document.getElementById('foo').lastElementChild);

//zad2

function clik(id){
    let zmiena=document.getElementById(id);

    zmiena.addEventListener('click',(tekst) =>{

        console.log(tekst.target.textContent);
    }
    
    
    );
}clik('ex2');

//zad3

let przycisk=document.querySelectorAll('#ex3 > div');

przycisk.forEach(element => {
    
    element.addEventListener('click', (pole) =>{

        const napis=pole.target.nextElementSibling;
        if(napis.style.display== 'none') napis.style.display='block';
        else napis.style.display='none';

        
    });
});

//zad 4 

przycisk.forEach(element =>{

    element.addEventListener('click', (pole )=>{

        const tlo=pole.target.parentElement;
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        tlo.style.backgroundColor=randomColor;

    });



});


//zad 5 

var ex5 = document.querySelectorAll('#ex5 > div');
var lista = document.querySelector('#ex5 ul');

function switchOptions(option) {
  ex5.forEach(el => {
    el.addEventListener('mouseover', ({target}) => {
          let color = target.style.backgroundColor;
          let allLiElements = lista.getElementsByTagName("li");
      
          switch(option) {
            case 1:
                allLiElements[0].style.backgroundColor = color;
              break;
            case 2:
                allLiElements[ allLiElements.length -1].style.backgroundColor = color;
              break;
            case 3:
                [].forEach.call(allLiElements, (el, index) => {
                   if(index % 2 !== 0) el.style.backgroundColor = color;
                });
              break;
            case 4:
                [].forEach.call(allLiElements, (el) => {
                   el.style.backgroundColor = color;
                });
              break;
            case 5:
                lista.style.backgroundColor = color;
              break;
                
            default: 
              return 0;
          }
      });
  });
}

// change paramter to show result from 1 to 5
switchOptions(3);
