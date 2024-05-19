
// Task 1
function processArray(arr) {
    return arr.map(num => (num % 2 === 0 ? num * num : num * 3));
}

// Task 2

function formatArrayStrings(stringArr, numberArr) {
    return stringArr.map((str, index) => {
        if (numberArr[index] % 2 === 0) {
            return str.toUpperCase();
        } else {
            return str.toLowerCase();
        }
    });
}
