//Finds and Counts bracket bracket pairs
function findbrackets(str){
	var counter = 0;
	var string = str.split("");
	for(var i = 0; i < string.length; i++){
		for(var j = 0; j < string.length; j++){
			if(string[i] === "[" && string[j] === "]" || string[i] === "(" && string[j] === ")"){
				counter++;
			}
		}
	}
	return counter + " bracket pairs found";
}
findbrackets("helloone([brackets])there");


