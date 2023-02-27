const inputArray = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

const evenArray = inputArray.filter(element => (element % 2) == 0);
const oddArray = inputArray.filter(element => (element % 2) == 1);

console.log('evenArray');
for(let idx in evenArray) {
    console.log(`${Number(idx) + 1} = ${evenArray[idx]}`);
}

console.log('oddArray');
for(let idx in oddArray) {
    console.log(`${Number(idx) + 1} = ${oddArray[idx]}`);
}