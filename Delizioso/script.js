let speed = .001,
    jupiter = document.getElementById("jupiter"),
    centerX = (jupiter.offsetWidth / 2) - 70,
    centerY = (jupiter.offsetHeight / 2) - 70,
    moons = [
      new moon('moon3', 1, '/img/reservation/moon1.jpg'),
      new moon('moon4', 1, '/img/reservation/moon2.jpg'),
    ]


requestAnimationFrame(function drawFrame(){
	moons.forEach(moon => moon.move())
  requestAnimationFrame(drawFrame)
})

function moon(id, speedRatio, src) {
  let moon = this
  this.elem = document.getElementById(id) || createHTMLMoon(id, src)
  let ioOrbitRadius = centerX - document.getElementById(id).offsetLeft + 750
  this.orbitRadius = src ? ioOrbitRadius + 27 * speedRatio : ioOrbitRadius
  this.speedRatio = speedRatio
  if (id == "moon3") {
      this.f = 3 // start position
  } else {
    this.f = 0
  }
  this.move = function(){
    moon.f += speed / moon.speedRatio // orbital resonance, wow!
    //console.log(id, moon.f)
    moon.elem.style.left = centerX + moon.orbitRadius
      * Math.sin(moon.f) + 'px'
    moon.elem.style.top = centerY + moon.orbitRadius
      * Math.cos(moon.f) + 'px'
  }
  return this
}

function createHTMLMoon(id, src) {
  let img = document.createElement('img')
  img.id = id
  img.src = src
  img.className = 'reservation-section__moon',
    img.style = 'position: absolute;'
  document.querySelector('.reservation-section__picture').appendChild(img)
  return img
}

window.addEventListener('resize', function(){
    centerX = (jupiter.offsetWidth / 2) - 70,
    centerY = (jupiter.offsetHeight / 2) - 70
})
