//BubbleSort Algo
function bubbleSort(list){
	var comparisons = 0, swaps = 0;
	var swapping;
for(var i = 0; i < list.length -1; i++){
	for(var j = 0; j < list.length - 1; j++){
		comparisons++;
		if(list[j] > list[j + 1]){
			//swap
			swapping = list[j + 1];
			list[j + 1] = list[j]
			list[j] = swapping;
			swaps++;
		}
	}
}
console.log("bubble sort first pass");
console.log("Comparisons: " + comparisons);
console.log("swaps: " + swaps);

return list;
}
bubbleSort([10,4,5,2,7,1,3,6,9,8]);