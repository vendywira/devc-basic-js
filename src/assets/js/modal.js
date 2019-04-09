// Get the modal
const modal = document.getElementById('modal-section')
const modalImg = document.getElementById("modal-img")
const modalLink = document.getElementById("modal-link")
const modalCaption = document.getElementById("modal-caption")
const modalClose = document.getElementById("modal-close")

function modalClick(id) {
  let img = document.getElementById(id)
  modal.style.display = "block"
  modalImg.src = img.src
  modalLink.href = img.getAttribute('link')
  modalCaption.innerHTML = img.getAttribute('alt')
}

modalClose.onclick = function () {
  modal.style.display = "none"
}