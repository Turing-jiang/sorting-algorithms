let arr = [1,20,15,17,12,7,25,14,13,19,30,16];
console.log(arr);
for(let i = 1; i < arr.length; i++){
 let j = i;
 let cur = arr[i];
 while(j > 0 && arr[j-1] > cur){
   arr[j] = arr[j-1];
   j--;
 }
  arr[j] = cur;
 
}

console.log(arr);
