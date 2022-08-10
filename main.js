const click = document.querySelectorAll('#click')
const hide = document.querySelectorAll('.hide')
const icon = document.querySelectorAll('.drop .fa-chevron-down')

click.forEach((clickItem, i) => {
  clickItem.addEventListener('click', () => {
    hide[i].style.maxHeight
      ? ((icon[i].style.transform = 'rotate(0deg)'),
        (hide[i].style.maxHeight = null))
      : ((icon[i].style.transform = 'rotate(180deg)'),
        (hide[i].style.maxHeight = '200rem'))
  })
})

const slider = document.getElementById('slider')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

const images = [
  './resources/dolphin-page-screenshot.jpg',
  './resources/weather-page-screenshot.jpg',
  './resources/dive-map-screenshot.jpg',
]

let count = 0

left.addEventListener('click', () => {
  count = count - 1 === -1 ? 2 : count - 1
  slider.src = images[count]
})

right.addEventListener('click', () => {
  count = count + 1 === images.length ? 0 : count + 1
  slider.src = images[count]
})
