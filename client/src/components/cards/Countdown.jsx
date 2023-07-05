import React from 'react';

const Countdown = () => {
  (function () {
    const second = 1000,
          minute = second * 60,
          hour = minute * 60,
          day = hour * 24;

    let today = new Date(),
        dd = String(today.getDate()).padStart(2, "0"),
        mm = String(today.getMonth() + 1).padStart(2, "0"),
        yyyy = today.getFullYear(),
        dayMonth = "08/26/",
        birthday = dayMonth + yyyy + " 19:30:00 GMT-0400";

    today = mm + "/" + dd + "/" + yyyy;
    if (today > birthday) {
      birthday = dayMonth;
    }

    const countDown = new Date(birthday).getTime(),
        x = setInterval(function() {

          const now = new Date().getTime(),
                distance = countDown - now;

          document.getElementById("days").innerText = Math.floor(distance / (day)),
          document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
          document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
          document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);

          if (distance < 0) {
            document.getElementById("countdown").style.display = "none";
            document.getElementById("done").style.display = "block";
            clearInterval(x);
          } else {
            document.getElementById("countdown").style.display = "block";
            document.getElementById("done").style.display = "none";
          }
        }, 0)
    }());

  return (
    <>
      <div id="countdown">
        <ul className="flex flex-row flex-wrap justify-evenly content-evenly">
          <li><span id="days"></span>Days</li>
          <li><span id="hours"></span>Hours</li>
          <li><span id="minutes"></span>Minutes</li>
          <li><span id="seconds"></span>Seconds</li>
        </ul>
      </div>
      <div id="done" className="text-5xl flex flex-row flex-wrap justify-evenly content-evenly">
        <span>💒</span>
        <span>👰🏻‍♀️🤵🏻</span>
        <span>🎉</span>
        <span>🎂</span>
      </div>
    </>
  )
}

export default Countdown;