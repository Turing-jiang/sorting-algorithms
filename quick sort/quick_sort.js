let arr = [1,20,15,17,12,7,25,14,13,19,30,16];
console.log(arr);

function quickSort(arr){
	if(arr.length <= 1){
		return arr;
	}

	let privote = arr[0];
	let left = [], right = [];
	arr.forEach((item)=>{
		if(item < privote){
			left.push(item);
		}else if(item > privote){
			right.push(item);
		}
	});

	return quickSort(left).concat([privote], quickSort(right));
}

console.log(quickSort(arr));
