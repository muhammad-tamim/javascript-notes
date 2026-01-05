function findLuckyArray(arr) {
    let min = arr[0];
    let count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
            count = 1;
        } else if (arr[i] === min) {
            count++;
        }
    }

    console.log(count % 2 ? "Lucky" : "Unlucky");
}


findLuckyArray([8, 8, 9, 5, 9]) // Lucky
findLuckyArray([3, 3, 3, 5, 3]) // Unlucky