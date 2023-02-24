
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
