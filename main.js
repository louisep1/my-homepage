const drop = document.getElementById('drop')
const hide = document.querySelector('.hide')
const icon = document.querySelector('.drop i')

drop.addEventListener('click', () =>
  hide.style.maxHeight
    ? ((icon.style.transform = 'rotate(0deg)'), (hide.style.maxHeight = null))
    : ((icon.style.transform = 'rotate(180deg)'),
      (hide.style.maxHeight = '20rem'))
)

// drop.addEventListener('click', () =>
//   hide.style.maxHeight === '20rem'
//     ? ((icon.style.transform = 'rotate(0deg)'), (hide.style.maxHeight = '0'))
//     : ((icon.style.transform = 'rotate(180deg)'),
//       (hide.style.maxHeight = '20rem'))
// )
