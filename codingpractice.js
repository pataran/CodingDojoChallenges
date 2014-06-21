// function largest_string(str){
// 	words = str.split(" ");
// 	counter = 0;
// 	counter_arr = [];
// 	for(var i = 0; i < words.length; i++){
// 		counter = 0;
// 		for(var j = 0; j < words[i].length; j++){
// 			counter++;
// 		}
// 		counter_arr.push(counter);
// 	}
// 	var sorted = bubbleSort(counter_arr);
// 	return sorted[sorted.length - 3];
// }
// largest_string("what eightytu is yourss gandolfo? name guess");




// function bubbleSort(counter_arr){
// 	var comparisons = 0, swaps = 0;
// 	for(var x = 0; x < counter_arr.length -1; x++){
// 		for(var i = 0, swapping; i < counter_arr.length - 1; i++){
// 			comparisons++;
// 			if(counter_arr[i] > counter_arr[i + 1]){
// 				//swap
// 				swapping = counter_arr[i + 1];
// 				counter_arr[i + 1] = counter_arr[i]
// 				counter_arr[i] = swapping;
// 				swaps++;
// 			}
// 		}
// 	}
// 		console.log("bubble sort first pass");
// 		console.log("Comparisons: " + comparisons);
// 		console.log("swaps: " + swaps);
// 	return counter_arr;
// 	}

function numberSearch(str){
var letters = str.split("");
var divisor = 0;
var letter_arr = [];
var total = 0;

	for(var i = 0; i < letters.length; i++){
		if(isNaN(letters[i]) === true){
			divisor += 1;
		}
		if(isNaN(letters[i]) === false && letters[i] != " "){
			letter_arr.push(letters[i]);
		}
	}
	console.log(letter_arr);
	for(var j = 0; j < letter_arr.length; j++){
		total += parseInt(letter_arr[j]);

	}
	 return Math.round(total/divisor);
}
numberSearch("hi 8 he 8");

// function findvalues(){
// 	var total = 0;
// 	var counter = 0;
// 	for(var i = 100; i <= 400000; i++){
// 		if(i%3 === 0 && i%5 !== 0 || i%3 !== 0 && i%5 === 0){
// 			total += i;
// 		}	
// 	}
// 	return total;
// }
// findvalues();



// function findduplicates(str){
// 	var arr = {};
// 	var total = 0
// 	for(var i = 0; i < str.length; i++){
// 		arr[str[i]] = total +=1;
// 		// if(arr[str[i]]){
// 		// 	arr[str[i]] = count;
// 		// }
// 	}
// 	return arr;
// }
// findduplicates("mississippi");

function gfc(num1,num2){
	var total1 = 0
	var total2 = 0;
	for(i = 1, j = 1; i <= num1, j <= num2; i++, j++){
		if(num1%i === 0 && num2%j === 0){
			if(total1 < i && total2 < j && total2 <= total1){
				total1 = j;
				total2 = i;
			}
		}
	}
	return total1 + " this is the gfc";
}
gfc(36,54);

function path(id)
{
	this.pathId = id;
	this.pathLength = Math.round(Math.random() * (100 - 1) + 1);
	this.connectedPath1 = null;
	this.connectedPath2 = null;
}

function create_paths(start)
{ 
	var self = this;
	var path = new path(start);
	self.head = path;
	self.lastPath = path;
	self.tail = path;
	this.addPath = function add_Path(value)
	{
		var currentPath = new path(value);
		self.lastPath.connectedPath2 = currentPath;
		currentPath.connectedPath1 = self.lastPath;
		console.log(self.lastPath, "created new Path with connection to last!");
		self.lastPath = currentPath;
		self.tail = self.lastPath	
		
	}

}
var a = new create_paths(1);
var b = new a.addPath(2);
var c = new a.addPath(3);
var d = new a.addPath(4);
var e = new a.addPath(5);
var f = new a.addPath(6);
var g = new a.addPath(7);
var h = new a.addPath(8);
// function number_of_paths(total){
// 	var pathBegin = create_paths(1);
// 	for(var i = 2; i < total; i++){
// 		var a = new pathBegin.addPath(i);
// 	}
// }
// number_of_paths(10);