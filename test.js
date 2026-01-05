function findMaxSubArray(arr) {
    let output = "";

    for (let i = 0; i < arr.length; i++) {

        // max of current sub-array
        let currentMax = arr[i];

        for (let j = i; j < arr.length; j++) {

            if (arr[j] > currentMax) {
                currentMax = arr[j];
            }

            output += currentMax + " ";
        }
    }

    console.log(output.trim());
}

findMaxSubArray([1, 6, 3, 7]); // 1 6 6 7 6 6 7 3 7 7
findMaxSubArray([3, 1, 2]);   // 3 3 3 1 2 2
