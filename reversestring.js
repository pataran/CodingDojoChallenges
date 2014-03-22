//Reverses a single input string
function reverseString(str){
	var string = "str";
	var reverseStr = ""
	for(var i = str.length -1; i >= 0; i--){
		reverseStr += str[i];
	}
	return reverseStr;
}
reverseString("hello");
