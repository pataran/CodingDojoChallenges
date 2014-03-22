
//Finds a Palindrome and ignores any non alphabetical characters with regex
function palindrome(str){
	var charArray = "";
	for(var i = 0; i < str.length; i++){
		if(str[i].match(/^[a-zA-Z]+$/)){
			charArray += str[i].toLowerCase() ;
		}
	}

	var length = charArray.length;
	for(var i = 0, j = length -1; i < length && j >= 0; i++, j--){
		if(charArray[i] != charArray[j])
		{
			return "The string is not a Palindrome!";
		}
	}
	return "The String is a Palindrome! " + charArray;
}
palindrome("Anne, I vote more cars race Rome-to-Vienna");