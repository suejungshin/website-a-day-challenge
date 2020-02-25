const sliderVals = document.querySelectorAll('.controls input')

const updateCSS = (div) => {
  const units = div.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${div.name}`, div.value + units);
}

for (let i = 0; i < sliderVals.length; i++) {
  sliderVals[i].addEventListener('change', () => updateCSS(sliderVals[i]))
}