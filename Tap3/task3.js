"use strict"

let arr = [45, 21, 458, 267, 123];

function getMax(nums) {
    let max = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
        if (max < nums[i]) {
            max = nums[i];
        }
    }
    return max;
}

alert("The biggest number is  " + getMax(arr));