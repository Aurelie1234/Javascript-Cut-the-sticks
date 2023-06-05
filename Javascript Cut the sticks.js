function cutTheSticks(arr) {
    // Write your code here
 
arr.sort((a, b) => {
        return a-b;
    })
    let i = 0;
    let result = [];
    
    while (i < arr.length) {
        result.push(arr.length - i)
        while (arr[i] === arr[i + 1]) {
            i++
        }
        i++
    }
    return result
    }
