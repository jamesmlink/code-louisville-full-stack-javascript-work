//Iterate through this array and log out the sum of the numbers in the array to the console.
//Use the .splice() function to insert the number 6 after the number 2 in the array.

var array = [1, 2, 3, 4, 5];
var sum = 0;

array.splice(2,0,6);

for (i = 0; i < array.length; i += 1){
  sum += array[i];
}

console.log(sum);

//Using jQuery, change the .text( ) of “Answer” to “$6,500”.

$("span").text(" $6,500.");
