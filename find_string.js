//Find a word in a string in under O(n^2) time;
function find_string(search,str){
	var searchLength = search.length;
	var wordCounter = 0;
	for(var i = 0; i < str.length; i++){
		if(str[i] === search[0]){
			var slice = str.substring(i,searchLength + i);
			if(slice === search){
				wordCounter++;
				console.log(i, "this is next i");
			}
		}	
	}
	return "The word " + search + " appears " + wordCounter + " times";
}
find_string("cream"," i screams scream for ice creamcream cream");