
function Clock() {
    const watch = new Date();
    let minute = watch.getMinutes();
    let hour = watch.getHours();
    let second = watch.getSeconds();
    let day = watch.getDate();
    let month = watch.getMonth();
    let year = watch.getFullYear();
    second = inc(second);
    minute = inc(minute);
    document.getElementById("time").innerHTML = hour + ":" + minute + ":" + second + " " + day+ "." + (month+1) + "." + year;
    setTimeout(Clock, 100);
}
function inc(end) {
    if (end < 10) {
        end += "0"
    };
    return end;
}
if (second>60) {
    minute +1
}