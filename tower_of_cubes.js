const prompt = require('prompt-sync')();

function block(m) {
    if(m <= 7) return m;
    let n = 1;
    while(Math.pow(n+1, 3) <= m) ++n;
    return 1 + block(Math.max(m - Math.pow(n, 3), Math.pow(n, 3) - 1 - Math.pow(n-1, 3)))
}

let m;
while(true){
    m = prompt();
    if (m == 'q') break;
    let total_volume = 0, total_blocks = 0;
    m = Number(m);
    while(m) {
        let n = 1;
        while(Math.pow(n+1, 3) <= m) ++n;
        if(block(m) == 1 + block(m - Math.pow(n, 3))) {
            m -= Math.pow(n, 3);
            total_volume += Math.pow(n, 3); 
        }
        else {
            m = Math.pow(n, 3) - 1 - Math.pow(n-1, 3);
            total_volume += Math.pow(n-1 ,3);
        }
        ++total_blocks;
    }
    console.log(total_blocks, total_volume);
    console.log('\nPress q to exit....\n')
}

