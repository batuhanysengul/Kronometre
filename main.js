let time = 0;
let running = 0;

function startPause() {
  if (running == 0) {
    running = 1;
    increment();
    document.getElementById("startPause").innerHTML = "DURDUR";
  } else {
    running = 0;
    document.getElementById("startPause").innerHTML = "DEVAM";
  }
}

function reset() {
  running = 0;
  time = 0;
  document.getElementById("startPause").innerHTML = "BASLAT";
  document.getElementById("output").innerHTML = "00:00:00";
}


function increment() {
  if (running == 1) {
    setTimeout(function () {
      time++;
      let dakika = Math.floor(time / 10 / 60);
      let saniye = Math.floor(time / 10 % 60);
      let salise = time % 10;
  
      document.getElementById("output").innerHTML = dakika + ":" + saniye + ":" + "0" + salise;
      increment();
    }, 100);
  }
}