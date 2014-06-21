function selectLogic(x,y){

var randomSelect = Math.random();
console.log(Math.random());
	if(randomSelect >= .7)
	{
		return doLogic(addition,x,y)
	}
	if(randomSelect >= .4 && randomSelect < .7)
	{
		return doLogic(subtract,x,y);
	}
	if(randomSelect >= 0 && randomSelect < .4)
	{
		return doLogic(multiplication,x,y);
	}

}
selectLogic(5,3);


function doLogic(type,x,y)
{
console.log(type);
	
if(type === addition)
{
	return addition(x,y);
}

if(type === multiplication)
{
	return multiplication(x,y);
}

if(type === subtract)
{
	return subtract(x,y);
}
	
}


function addition(x,y){
	var add = x + y;
	return add;
}

function subtract(x,y){
	var subtract = x - y;
	return subtract;
}


function multiplication(x,y){
	var multiply = x * y;
	return multiply;
}