//zad1

var car={marka:"VV",
	model:"Golf",
	kolor:"red",
	damage:true};

for(const el in car)
{
	console.log(`${el}`);
}

//zad2
car.repair=function (broke){
	this.damage=broke;
};
car.repair(false);

//zad3

var addition={ sum:0,
	add_sum:function(tablica){
	
	tablica.forEach(function(item){
		addition.sum+=item;
	  
	})
	}
	
	};
addition.add_sum([1,2,3]);
console.log(addition.sum);
	

//zad4

var car={marka:"Audi",
	model:"A3",
	silnik:2.0,
	rocnzik:2020};

for(const item in car)
{
	console.log(`${item}: ${car[item]}`);
}
//zad 5


var car={marka:"VV",
	model:"Golf",
	color:"red",
	damage:true,
	equipment:{
		upholstery:"skora",
		light:"led",
	}
	
	};

for(const item in car.equipment)
{
	console.log(`${item}`);
}

//zad6
car.styl="sedan";
car.hi= function(){
	console.log('Hello');
};
car.hi();