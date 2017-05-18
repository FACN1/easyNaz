var labels = document.querySelectorAll('#labelBg')

console.log(labels)

// event listener for the more infor buttons
labels.forEach(function (button, index) {
  button.addEventListener('click', function (event) {
    console.log(event.target.parentNode.parentNode)
    // set the style of last child of list that the more button is on to block
    event.target.parentNode.parentNode.classList.toggle('bg-checked')
  })
})
