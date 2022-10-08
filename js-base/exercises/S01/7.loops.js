// Your task:
// 1. Write body of function 'elementChecker'
// 2. Inside this function iterate through elements from an array
// 3. print each element on console

// to test your solution in terminal You can run following command:
// npm run es1e7

//// TODO:
// here place your solution:

function elementChecker(anArray) {
    for (let i = 0; i < anArray.length; i++) {
        console.log(anArray[i])
    }
}

const elementChecker1 = (anArray) => {
    anArray.forEach((el, i) => {
        console.log('value: ', el)
        console.log('index: ', i)
    })
}


//// DONT MODIFY CODE BELOW!
// Here You will find expected result of exercise
// const arr = [1, 2, 'test']
// const arr1 = [1, 2, 'test']
elementChecker([1, 2, 'test'])
elementChecker([3, 4, 'test1'])
elementChecker1([1, 2, 'test'])
// elementChecker(arr)
// elementChecker(arr1)

// Expected output:
// Expected output of this script is following info on console:
// 1
// 2
// test