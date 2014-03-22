//Manually assigns alphabet values and orders them, uses quick_sort to sort

function sort_Alphabet(str){
	var letters = "abcdefghijklmnopqrstuvwxyz".split("");
	var compare_string = str.split("");
	var value_arr = [];
	var alphabet_array = [];

	///Creates a value for each letter of the Alphabet
	for(var i =0; i < compare_string.length; i++){
		for(var j = 0; j < letters.length; j++){
			if(compare_string[i] === letters[j]){
				var value = letters.indexOf(letters[j]);
				value_arr.push(value);
			}
		}
	}

	var sorted = quick_sort(value_arr);

	for(var i = 0; i < sorted.length; i++){
		for(var j = 0; j < letters.length; j++){
			if(sorted[i] === letters.indexOf(letters[j])){
				alphabet_array.push(letters[j]);
			}
		}
	}
	return alphabet_array;
}
sort_Alphabet("hellopatrick");


function quick_sort(array){
	var pivot = array[0];

	if(pivot === undefined){
		return [];
	}

	var left_arr = [];
	var right_arr = [];

	for (var i = 0; i < array.length; i++){
		if(array[i] < pivot){
			left_arr.push(array[i]);
		}else if(array[i] > pivot){
			right_arr.push(array[i]);
		}
	}
	return (quick_sort(left_arr).concat(pivot,quick_sort(right_arr)));
}
