const drop = document.getElementById('drop')
const hide = document.querySelector('.hide')
const icon = document.querySelector('.drop i')

// drop.addEventListener('click', () => console.log('clicked'))

// drop.addEventListener('click', () =>
//   hide.style.display === 'none'
//     ? (hide.style.display = 'block')
//     : (hide.style.display = 'none')
// )

drop.addEventListener('click', () =>
  hide.style.display === 'none'
    ? ((hide.style.display = 'block'),
      (icon.style.transform = 'rotate(180deg)'))
    : ((hide.style.display = 'none'), (icon.style.transform = 'rotate(0deg)'))
)

// drop.addEventListener('click', () => {
//   hide.style.visibility === 'hidden'
//     ? ((hide.style.visibility = 'visible'),
//       (hide.style.opacity = 1),
//       (hide.style.transform = 'translate(0, 20rem)'))
//     : ((hide.style.visibility = 'hidden'),
//       (hide.style.opacity = 0),
//       (hide.style.transform = 'translate(0, -20rem)'))
// })

// icon.addEventListener('click', () => console.log('click'))
