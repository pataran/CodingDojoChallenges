//Quick Sort Alogrithm
function quick_sort(array){
	var pivot = array[0];

	if(pivot === undefined){
		return [];
	}

	var left_arr = [];
	var right_arr = [];

	for (var i = 0; i < array.length; i++){
		if(array[i] < pivot){
			left_arr.push(array[i]);
		}else if(array[i] > pivot){
			right_arr.push(array[i]);
		}
	}
	return (quick_sort(left_arr).concat(pivot,quick_sort(right_arr)));
}