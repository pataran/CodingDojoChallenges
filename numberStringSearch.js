//Find Numbers within a String
function numberSearch(str){
var letters = str.split("");
var divisor = 0;
var letter_arr = [];
var total = 0;

	for(var i = 0; i < letters.length; i++){
		if(isNaN(letters[i]) === true){
			divisor += 1;
		}
		if(isNaN(letters[i]) === false && letters[i] != " "){
			letter_arr.push(letters[i]);
		}
	}
	console.log(letter_arr);
	for(var j = 0; j < letter_arr.length; j++){
		total += parseInt(letter_arr[j]);

	}
	 return Math.round(total/divisor);
}
numberSearch("hi 8 he 8");