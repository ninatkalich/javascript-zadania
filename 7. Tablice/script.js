//zad 1 

var  arr=[1,2,3,4,5,6,7,8,9];

arr.forEach(function(el){
console.log(el);
});
//zad2 

const arr1 = [1, 2,3,4,5, 'a','b','c'];

console.log(`${arr1[0]} ${arr1[1]}`);

console.log(`${arr1[arr1.length - 1]}`);

arr1.forEach(element => {

    console.log(element);

});
for (let i = 0; i < arr1.length; i++) {

    if (i % 2 === 0) {

        console.log(arr1[i]);
    }
}
for (let i = 0; i < arr1.length; i++) {

    if (typeof(arr1[i]) === 'string') {

        console.log(arr1[i]);
    }
}
for (let i = 0; i < arr1.length; i++) {

    if (typeof(arr1[i]) === 'number') {

        console.log(arr1[i]);

    }
}

//zad3

var arr= [1,2,3,4,5,6,7,8,9,10];

//zad 31

var sum=0;

arr.forEach(function(el){

 sum+=el;

})
console.log(sum);
//zad 32


var roz=0;

arr.forEach(function(zmiene){

 roz-=zmiene;

})
console.log(roz);
//zad 33


console.log(sum/arr.length);

//zad 34
for(var i=0;i<arr.length;i++)
{
	if(arr[i]%2==0)console.log(arr[i]);

}


//zad 35
for(var i=0;i<arr.length;i++)
{
	if(arr[i]%2!=0)console.log(arr[i]);
}


//zad 36
var max=arr[0];
arr.forEach(function(zmiene){

 if(max<=zmiene)max=zmiene;

})
console.log(max);



//zad 37
var min=arr[0];
arr.forEach(function(zmiene){

 if(min=>zmiene)max=zmiene;

})
console.log(min);

//zad 38


for(var i=arr.length;i>=0;i--)
{
	console.log(arr[i]);
}

//zad4

function tab(arr){

var sum=0;
arr.forEach(function(item){

 sum+=item
})
	return sum

}
console.log(tab(arr));

//zad5

function tab(arr){

var sum=0;
arr.forEach(function(item){

 sum+=item;
})
	return sum;

}

function pomn(){
  
  
}
console.log(tab(arr));
var srednia=tab(arr)/arr.length;
 arr.forEach(function(zmiene){
   console.log(zmiene*srednia);
 });

 //zad6

 function tab(arr){

var sum=0;
  var i=0;
arr.forEach(function(item){

if(item%2==0){
  sum+=item;
  ++i;
  
}
})
	return sum/i;

}
console.log(tab(arr));

//zad7

function tab(arr){


console.log(arr.sort());

	
}
console.log(tab(arr));

//zad 8

function tab(tab1,tab2){


return tab1.concat(tab2);
}
const  arr2=[11,12,13,14,15,16,17,18,19,20];

console.log(tab(arr,arr2));

//zad9

function tab(tab1){
 const arr2=[];

  tab1.forEach(function(item){
   arr2.push(item*(-1));
  })
return arr2;
}

console.log(tab(arr));