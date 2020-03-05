function clock() {
  var hour = document.getElementById("hours");
  var minute = document.getElementById("minutes");
  var seconds = document.getElementById("seconds");

  const h = new Date().getHours();
  const m = new Date().getMinutes();
  const s = new Date().getSeconds();

  hour.innerHTML = h;
  minute.innerHTML = m;
  seconds.innerHTML = s;

  var interval = setInterval(clock, 1000);
}

clock();
