//BubbleSort Algo
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