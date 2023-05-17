document.addEventListener("DOMContentLoaded", function () {
  const container = getElementById("ctn")

  const btn_close_aside = getElementById("btn_close_aside")
  const btn_open_aside = getElementById("btn_open_aside")

  btn_open_aside.addEventListener("click", openAside)
  btn_close_aside.addEventListener("click", closeAside)

  function openAside() {
    container.classList.add('aside_open')
  }

  function closeAside() {
    container.classList.remove('aside_open')
  }

  function getElementById(id) {
    return document.getElementById(id)
  }
})