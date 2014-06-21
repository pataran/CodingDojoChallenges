

// var sort_Alphabet = function(input){
// 	// console.log(input);
// 	var string = "abcdefghijklmnopqrstuvwxyz";
// 	var split_string =  string.split("");
// 	var word = input.split("");
// 	var alphabet_value = {};
// 	var word_value_arr = {};

// 	for(var i = 0; i < split_string.length; i++){
// 		alphabet_value[i] = split_string[i]; 
// 		console.log(alphabet_value);

// 	}
	
// 	for(var j = 0; j < word.length; j++){
// 		for(var k in alphabet_value){
// 			// console.log(alphabet_value);
// 			// if(word[j] === alphabet_value[k]){		
// 			// 	// string[k].push(word_value_arr);
// 			// }
// 		}
// 	}
// 	// console.log(word_value_arr);
// }
// sort_Alphabet("hello");
var a = [69,3,2,9,24,4,100];

var sort_Array = function(arg1){

if (arg1.length == 0)
	return [];

var left = new Array();
var right = new Array();
var pivot = arg1[0];

for (var i = 1; i < arg1.length; i++){
	console.log("pivot is" + " " + pivot)
	if(arg1[i] < pivot){
		left.push(arg1[i]);
		console.log(left + "left");
	}else{
		right.push(arg1[i]);
		console.log(right + "right");
	}
}


	return sort_Array(left).concat(pivot, sort_Array(right));
};
console.log(sort_Array(a));



