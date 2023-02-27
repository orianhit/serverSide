
function factorial(input) {
    if([0,1].includes(input)) {
        return 1
    } else {
        return input * factorial(input - 1)
    }
}

for(let i =0; i < 10; i++) {
    console.log('factorial(' + i + ')} = ' + factorial(i));
}

const inputArray = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

const evenArray = inputArray.filter(element => (element % 2) == 0);
const oddArray = inputArray.filter(element => (element % 2) == 1);

console.log('evenArray');
for(let i =0; i < evenArray.length; i++) {
    console.log('' + (i + 1) + ' = ' + evenArray[i]);
}

console.log('oddArray');
for(let i =0; i < oddArray.length; i++) {
    console.log('' + (i + 1) + ' = ' + oddArray[i]);
}