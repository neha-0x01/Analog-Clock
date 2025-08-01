setInterval(() => {
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourRotation = 30 * hours + minutes / 2;       // hour hand: 30° per hour + extra by minute
    const minuteRotation = 6 * minutes + seconds / 10;   // minute hand: 6° per min + extra by second
    const secondRotation = 6 * seconds;                  // second hand: 6° per second

    document.getElementById('hour').style.transform = `rotate(${hourRotation}deg)`;
    document.getElementById('minutes').style.transform = `rotate(${minuteRotation}deg)`;
    document.getElementById('second').style.transform = `rotate(${secondRotation}deg)`;
}, 1000);
