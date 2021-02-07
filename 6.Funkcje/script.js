function text() {

console.log("Udalo sie!");

}
text();

//zad2
function sea(number){
	console.log(number);
}
sea(5);

//zad3
function tab(arr){

	console.log(arr);

}
var  tablica=[1,2,3,4,5,6,7,8];
tablica.forEach(tab)

//zad4

function sea(text){
  
  console.log(text);
  ++i;

if(i>=4)clearInterval(inter);

}
var sub="something";
var i=0;

let inter = setInterval( sea , 3000,sub);


