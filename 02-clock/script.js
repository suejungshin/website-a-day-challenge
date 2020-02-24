

const hourHand = document.querySelector('.hour-hand')
const minHand = document.querySelector('.min-hand')
const secHand = document.querySelector('.second-hand')

const setTime = () => {
  let d = new Date()
  let hourNow = d.getHours()
  let minNow = d.getMinutes()
  let secNow = d.getSeconds()

  let hourAngle = ((hourNow / 12) * 360) + 90
  let minAngle = ((minNow / 60) * 360) + 90
  let secAngle = ((secNow / 60) * 360) + 90
  console.log(hourAngle, minAngle, secAngle)

  hourHand.style.transform = `rotate(${hourAngle}deg)`
  minHand.style.transform = `rotate(${minAngle}deg)`
  secHand.style.transform = `rotate(${secAngle}deg)`
}

setInterval(setTime, 1000)
setTime()

