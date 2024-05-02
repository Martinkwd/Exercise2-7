
let randomData = [1, 2, 3, 4, 5];

// replace the value at postion 1 and 4 using 15 and 10
randomData[1]= 15
randomData[4]= 10
console.log(randomData[1]);
console.log(randomData[4]);
console.log(randomData);

// add new element at the beginning of the array using 90
randomData.unshift(90)
console.log(randomData);

// Remove the element at the end of the array

let lastNumber= randomData.pop();
console.log(lastNumber); 

// Print the array to the console.
console.log(randomData); 
