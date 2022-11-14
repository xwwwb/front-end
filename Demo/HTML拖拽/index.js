const list = document.querySelector('.list')

let sourceNode;
list.ondragstart = function (e) {
  setTimeout(() => {
    e.target.classList.add('moving')
  }, 0);
  sourceNode = e.target
  e.dataTransfer.effectAllowed = 'move'
}

list.ondragenter = function (e) {
  e.preventDefault()
  if (e.target === list || e.target === sourceNode) {
    return
  }
  // 因为document.querySelectorAll() 获取到的是静态DOM集合 所以不如使用list.children
  let itemList = Array.from(list.children)
  let targetIndex = itemList.indexOf(e.target)
  let sourceIndex = itemList.indexOf(sourceNode)

  if (sourceIndex < targetIndex) {

    list.insertBefore(sourceNode, e.target.nextElementSibling)
  }
  if (sourceIndex >= targetIndex) {

    list.insertBefore(sourceNode, e.target)
  }
}

list.ondragend = function (e) {
  e.target.classList.remove('moving')
}
list.ondragover = function (e) {
  e.preventDefault()
}