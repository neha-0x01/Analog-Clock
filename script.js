
setInterval(() => {
    let d = new Date();
    let htime = d.getHours();
    let mtime = d.getMinutes();   // ✅ spelling fix
    let stime = d.getSeconds();

    let hrotation = 30 * htime + mtime / 2;
    let mrotation = 6 * mtime;
    let srotation = 6 * stime;

    let hour = document.getElementById("hour");
    let mintues = document.getElementById("mintues");
    let second = document.getElementById("second");

    hour.style.transform = `rotate(${hrotation}deg)`;     // ✅ spelling fix
    mintues.style.transform = `rotate(${mrotation}deg)`;  // ✅ spelling fix
    second.style.transform = `rotate(${srotation}deg)`;   // ✅ spelling fix
}, 1000);

