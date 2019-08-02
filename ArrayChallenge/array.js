console.log("Connected");
var arr=[1, 2, 3];
//
function printReverse(arr){
    for(var i=arr.length-1; i>=0;i--){
console.log(arr[i]);
    }
}
printReverse([3,4,5]);
// second challenge is checking the uniformity of array element 
function isUniform(arr){
    var first=arr[0];
    for(var i=1;i< arr.length; i++){
     if(arr[i]!==first) {
           return false;
       }
    }
        return true;
    }
//Problem Set III: Adding the entire array 
function sumArray(arr){
    var total=0;
for(var i=0;i<=arr.length;i++)
total += arr[i];
// 
    // arr.forEach(function(element){
    // total +=element;
    // });
    return total;
    }
// Problem Set IV. 
function maxi(arr){
    var maxi=arr[0];
    for(var i=0; i<=arr.length;i++){
    {if(maxi<arr[i+1])
        maxi=arr[i+1];
    }
}
    return maxi;
}
maxi.forEach()