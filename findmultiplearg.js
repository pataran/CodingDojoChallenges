

function findmultiple(num){
var highestnum = num;
var divisor = 1;

	while(highestnum%divisor === 0){
		if(highestnum%divisor === 0 ){
			divisor++;
			console.log(highestnum);
		}else{
			highestnum++;
			divisor++;
            console.log(divisor);
		}
	}
}
findmultiple(2520);

function findDivisors(num){
	var highestnum = num;
	var logicArr = [false, highestnum];
	console.log(logicArr[1]);
	while(highestnum !== true){
 	 highestnum = returnHighest(highestnum);
	}
	console.log("ended");
	return highestnum;
	// return numfound;
}
findDivisors(1);

function returnHighest(num){
	var highestnum = num;
	for(var divisor = 1; divisor < 21; divisor++){
		if(highestnum%divisor !== 0){
			highestnum++;
			// console.log(highestnum);
			return highestnum;
		}			
	}	
			return true;
}






function blackjackHighest(strArr){ 
	 var cardTotal = 0;
	 var highestcard = 0;
	 var cardNums = convertCardstoNums(strArr);
	 console.log(cardNums +  " this is card nums");
	 for(var i = 0; i < cardNums.length; i++){
	 	cardTotal += cardNums[i];
	 	if(cardNums[i] > highestcard){
	 		highestcard = cardNums[i];
	 }
		if(cardTotal < 21){
			console.log(cardTotal + " is the total");
			return "your hand is less than blackjack";
			
		}
			else if(cardTotal > 21 && highestcard === 11){

				console.log("this suite is higher than 21 and has an ace in it!");
				highestcard = 1;
				console.log("ace is now " + highestcard);

				for(var j = 0; j < cardNums.length; j++){
					if(cardNums[j] === 11){
						cardNums[j] = 1;
					}
					console.log(cardNums +" the numbers are rounded");
				}
			}
			else if(cardTotal > 21){
				
				console.log("larger than blackjack");
				return "highestcard is " + convertNumstoCards(highestcard);
			}
			else{
				return "blackjack!";
			}	 
    }
}
blackjackHighest(["ace","queen"]);


 function convertCardstoNums(strArr){
 	var cardLettersArr = strArr;
    var cardNumArray = [];
    for(var i = 0; i < cardLettersArr.length; i++){
    	if(cardLettersArr[i] === "ace"){
    		cardNumArray.push(1[11]);
    	}
    	else if(cardLettersArr[i] === "two"){
    		cardNumArray.push(1[2]);
    	}
    	else if(cardLettersArr[i] === "three"){
    		cardNumArray.push(3[3]);
    	}
    	else if(cardLettersArr[i] === "four"){
    		cardNumArray.push(4[4]);
    	}
    	else if(cardLettersArr[i] === "five"){
    		cardNumArray.push(5[5]);
    	}
    	else if(cardLettersArr[i] === "six"){
    		cardNumArray.push(6[6]);
    	}
    	else if(cardLettersArr[i] === "seven"){
    		cardNumArray.push(7[7]);
    	}
    	else if(cardLettersArr[i] === "eight"){
    		cardNumArray.push(8[8]);
    	}
    	else if(cardLettersArr[i] === "nine"){
    		cardNumArray.push(9[9]);
    	}
    	else if(cardLettersArr[i] === "ten"){
    		cardNumArray.push(10[10]);
    	}
    	else if(cardLettersArr[i] === "jack"){
    		cardNumArray.push(10[j]);
    	}
    	else if(cardLettersArr[i] === "queen"){
    		cardNumArray.push(10[q]);
    	}
    	else if(cardLettersArr[i] === "king"){
    		cardNumArray.push(10[k]);
    	}
    }
    // console.log(cardNumArray);
    return cardNumArray;
 }

function convertNumstoCards(num){
		var cardLettersArr = [num];
		var cardNameArray = [];
	for(var i = 0; i <= cardLettersArr.length; i++){

		if(cardLettersArr[i] === 11){
    		cardNameArray.push("ace");
    	}
    	else if(cardLettersArr[i] === 2){
    		cardNameArray.push("two");
    	}
    	else if(cardLettersArr[i] === 3){
    		cardNamerray.push("three");
    	}
    	else if(cardLettersArr[i] === 4){
    		cardNameArray.push("four");
    	}
    	else if(cardLettersArr[i] === 5){
    		cardNameArray.push("five");
    	}
    	else if(cardLettersArr[i] === 6){
    		cardNameArray.push("six");
    	}
    	else if(cardLettersArr[i] === 7){
    		cardNameArray.push("seven");
    	}
    	else if(cardLettersArr[i] === 8){
    		cardNameArray.push("eight");
    	}
    	else if(cardLettersArr[i] === 9){
    		cardNameArray.push("nine");
    	}
    	else if(cardLettersArr[i] === 10){
    		cardNameArray.push("ten");
    	}
    	else if(cardLettersArr[i] === 10.1){
    		cardNameArray.push("jack");
    	}
    	else if(cardLettersArr[i] === 10.2){
    		cardNameArray.push("queen");
    	}
    	else if(cardLettersArr[i] === 10.3){
    		cardNameArray.push("king");
    	}

	}
	return cardNameArray;
}

function test(){
    var testArr = [];
    testArr.push(1[1]);
    console.log(testArr);
}
test();

function createCards(){
    var suit = ["clubs", "hearts", "diamonds", "spades"];
    var rank = ["ace", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "jack", "queen", "king"]   
        for (var j = 0 ; j < rank.length; j++){
            this.rank = rank[j];
        }
           for (var i = 0 ; i < suit.length; i++){
            this.suit = suit[i];
        }
    
}

var deck = new createCards();
console.log(deck);




