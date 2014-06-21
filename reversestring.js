

function reverseString(){
	var string = "hello";
	var stringbreak = string.split("");
	var wordReverse = [];

	for(var i = stringbreak.length -1; i >= 0; i--){
		wordReverse.push(stringbreak[i]);
	}
	return wordReverse;

}
reverseString();

function largestWord(sentence){
	var words = sentence.split(" ");
	var word = null;
	var longest = 0;
	var object = {};
	for(var i = 0; i < words.length; i++){
		if(longest < words[i].length){
			longest = words[i].length;
			word = words[i];
			
		}

	}
	object[longest] = word;
	
	return "the longest word is " + object[longest] + " which has " + longest + " letters";
}
largestWord("what is your name whatdido gandolfopat?");