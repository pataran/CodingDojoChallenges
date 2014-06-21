

function sort_Alphabet(str){
	var letters = "abcdefghijklmnopqrstuvwxyz".split("");
	var compare_string = str.split("");
	var value_arr = [];
	var alphabet_array = [];

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

function find_vowels(str){
	var vowels = "aeiou".split("");
	var vowel_counter = 0;
	var vowel_obj = {};
	var letter_obj = {};
	var letter_count = 0;
	var vowels_count = 0;
	var data_arr = [];
	for(var i = 0; i < str.length; i++){
		for(var j = 0; j < vowels.length; j++){
			if(str[i] === vowels[j]){
				vowel_obj[vowels[j]] = vowels_count += 1;
			}else{
				letter_obj[str[i]] = letter_count += 1;
			}
		}
	}
	return letter_obj;
}
find_vowels("findallthevowels");


var x = 100;
var i = 1;
divisor_arr = [];
while(i < x){
	if(x%i == 0){
		divisor_arr.push(i);
		i += 1;

	}else{
		i += 1;
	} 
}
console.log(divisor_arr);


function bubbleSort(list){
	var comparisons = 0, swaps = 0;

for(var x = 0; x < list.length -1; x++){
	for(var i = 0, swapping; i < list.length - 1; i++){
		comparisons++;
		if(list[i] > list[i + 1]){
			//swap
			swapping = list[i + 1];
			list[i + 1] = list[i]
			list[i] = swapping;
			swaps++;
		}
	}
}
console.log("bubble sort first pass");
console.log("Comparisons: " + comparisons);
console.log("swaps: " + swaps);

return list;
}

