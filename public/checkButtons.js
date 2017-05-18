var labels = document.querySelectorAll('#labelBg')

// event listener for the more infor buttons

labels.forEach(function (button, index) {
  button.addEventListener('click', function (event) {
    // set the style of last child of list that the more button is on to block
    event.target.parentNode.parentNode.classList.toggle('bg-checked')
  })
})
