const os = require('os');

let timerId = setTimeout(function tick() {
    // console.log(`Your Operating System: ${os.freemem()}`);
    console.log(`${((os.freemem() / os.totalmem()) * 100).toFixed(2)} % of your RAM is free.`);
    //- get.innerHTML = `#{((os.freemem() / os.totalmem()) * 100).toFixed(2)} % of your RAM is free.`;
    timerId = setTimeout(tick, 200);
}, 200); 