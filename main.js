function updateClock() {
  let now = new Date();
  document.querySelector('.clock').innerHTML = now.toLocaleTimeString()

}

setInterval(updateClock, 1000)


