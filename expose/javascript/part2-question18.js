function printCurrentTime() {
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}

// 1000 milliseconds = 1 second
setInterval(printCurrentTime, 1000);