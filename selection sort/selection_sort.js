let arr = [1,20,15,17,12,7,25,14,13,19,30,16];
console.log(arr);
for(let i = 0; i < arr.length - 1; i++){
  let min = 999, index, temp;
  for(let j = i; j < arr.length; j++){
    if(arr[j] < min){
      min = arr[j];
      index = j
    }
  }
  temp = arr[i];
  arr[i] = arr[index];
  arr[index] = temp;
}

console.log(arr);
