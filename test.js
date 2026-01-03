function palindromeOrNot(arr) {

    const reverseArr = []

    for (let i = arr.length - 1; i >= 0; i--) {
        reverseArr.push(arr[i])
    }

    let isPalindrome = false

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === reverseArr[i]) {
            isPalindrome = true
        }
        else {
            isPalindrome = false
            break
        }
    }

    if (isPalindrome) {
        return console.log("YES")
    }
    else {
        return console.log("NO")
    }

}

palindromeOrNot([1, 3, 2, 3, 1]); // YES
palindromeOrNot([1, 2, 3, 4,]); // NO
