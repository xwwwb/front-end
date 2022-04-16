let items = document.querySelectorAll('.item');

function setActive() {
  items.forEach(item => {
    item.classList.remove('active');
  })
  this.classList.add('active');
}

items.forEach(item => {
  item.addEventListener('click', setActive);
})