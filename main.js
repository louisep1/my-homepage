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

//
//
// When it was just the one drop down at the bottom:

// const drop = document.getElementById('drop')
// const hide = document.querySelector('.hide')
// const icon = document.querySelector('.drop .fa-chevron-down')

// drop.addEventListener('click', () =>
//   hide.style.maxHeight
//     ? ((icon.style.transform = 'rotate(0deg)'), (hide.style.maxHeight = null))
//     : ((icon.style.transform = 'rotate(180deg)'),
//       (hide.style.maxHeight = '20000rem'))
// )

// drop.addEventListener('click', () =>
//   hide.style.maxHeight === '20rem'
//     ? ((icon.style.transform = 'rotate(0deg)'), (hide.style.maxHeight = '0'))
//     : ((icon.style.transform = 'rotate(180deg)'),
//       (hide.style.maxHeight = '20rem'))
// )
