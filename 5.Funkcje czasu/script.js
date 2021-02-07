// Zadanie 1
const napis = setInterval(() => {
    console.log("Cześć po raz " + i)
    i += 1;
    if (i >= 16) {
        clearInterval(napis);
    }
}, 3000);
let i = 1;

// Zadanie 2
const tab = [1, 2, 3, 4, 5];
const arr = setTimeout(() => {
    tab.forEach(el => {
        console.log(el)
    });
    const insertArr = setInterval(() => {
        if (tab[i]) {

            console.log(tab[i]);
            
            i++;
        } else{
            clearInterval(insertArr);
        }
    }, 3000);
}, 2000);
let i = 0;