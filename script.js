// setInterval(() =>{
//    d = new Date();
//    htime = d.getHours();
//    mtime = d.getMinutes();
//    stime = d.getSeconds();
//    hrotation = 30*htime + mtime/2;
//    mrotation = 6*mtime;
//    srotation = 6*stime;


//    hour.style.transfrom = `rotate(${hrotation}deg)`;
//    mintues.style.transfrom = `rotate(${mrotation}deg)`;
//    second.style.transfrom = `rotate(${srotation}deg)`;
// }, 1000);

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

