window.electronAPI.getImage((event, data) => {
  console.log(data)
  document.querySelector("img").src = data
  window.electronAPI.closeWindow2()
})