// Expandable/drop down sections:
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

// Slider section:
const slider = document.getElementById('slider')
const left = document.querySelector('.left')
const right = document.querySelector('.right')

const images = [
  './resources/dolphin-page-screenshot.jpg',
  './resources/weather-page-screenshot.jpg',
  './resources/dive-map-screenshot.jpg',
]

const divs = document.querySelectorAll('.slide-div')

let count = 0

const updateDisplay = position => {
  slider.src = images[position]
  divs.forEach((div, i) =>
    i === position
      ? (div.style.display = 'block')
      : (div.style.display = 'none')
  )
}

left.addEventListener('click', () => {
  count = count - 1 === -1 ? images.length - 1 : count - 1
  updateDisplay(count)
})

right.addEventListener('click', () => {
  count = count + 1 === images.length ? 0 : count + 1
  updateDisplay(count)
})

// Adding left and right swipe functionality to slider:
const area = document.querySelector('.area')
let start = 0
let end = 0

area.addEventListener('touchstart', e => (start = e.changedTouches[0].screenX))

area.addEventListener('touchend', e => {
  end = e.changedTouches[0].screenX

  count =
    start > end && count - 1 === -1
      ? images.length - 1
      : start > end
      ? count - 1
      : count + 1 === images.length
      ? 0
      : start < end && count + 1

  updateDisplay(count)
})
