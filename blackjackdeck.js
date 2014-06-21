

function generate_blackjack(){
	var deck = [];
	var ranks = ["ace", "two","three","four","five","six","seven","eight", "nine", "ten", "jack", "queen", "king"];
	var suits = ["diamonds","hearts","spades","clubs"];
	for(var i = 0; i < ranks.length; i++){
		for(var j = 0; j < suits.length; j++){
			deck.push(ranks[i].length * j);
		}
	console.log(deck);
	}
}
generate_blackjack();