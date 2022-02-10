const prompt = require('prompt-sync')();
const result = []

function fibonacci(n) {
    result[0] = 0;
    result[1] = 1;
    if (n <= 0) return 'Wrong Input';
    if (n === 1) return result.slice(0, 1);

    for(let i=2; i < n; i++) {
        result[i] = result[i-1] + result[i-2]; 
    }
    return result;
}
let n;
while (true) {
    n = prompt('Please Enter ::');
    if (n == 'q') break;
    console.log('Result ::', fibonacci(Number(n)).toString());
    console.log('\nPress q to exit....\n')
} 

