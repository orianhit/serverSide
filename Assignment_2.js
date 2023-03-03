const inputArray = Array.from({length: 10}, () => Math.floor(Math.random() * 100));

console.log('evenArray');
inputArray
    .filter(element => !(element % 2))
    .forEach( element => console.log(element));
console.log('oddArray');
inputArray
    .filter(element => element % 2)
    .forEach( element => console.log(element));