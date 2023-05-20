document.querySelectorAll('.dropdown').forEach((drop) => {
  if (drop) {
    drop.addEventListener('click', () => {
      drop.lastElementChild.classList.toggle('hidden')
      drop.firstElementChild.classList.toggle('rotate-180')
    })

  }
})

document.querySelectorAll('.options').forEach((option) => {
  if (option) {
    option.addEventListener('click', (e) => {
      e.target.parentElement.previousElementSibling.value = e.target.textContent
      // console.log(e.target.textContent);
    })
  }
})
