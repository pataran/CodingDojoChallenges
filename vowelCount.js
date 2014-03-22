///Returns an object with counted vowels
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