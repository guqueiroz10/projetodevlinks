function toggleMode() {
  const html = document.documentElement

  /*
  1° forma
  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }
  Simplicando:  
  */
  html.classList.toggle("light")

  /*pegar a tag img*/
  const img = document.querySelector("#profile img")

  /*substituir a imagem*/
  if (html.classList.contains("light")) {
    /*se tiver light mode, adicionar imagem ligth*/
    img.setAttribute("src", "./assets/assets/light_photo.jpg")
    img.setAttribute("alt", "Foto de Gustavo Queiroz no modo sério")
  } else {
    /*se tiver sem light mode, manter original*/
    img.setAttribute("src", "./assets/assets/dark_photo.jpeg")
    img.setAttribute("alt", "Foto de Gustavo Queiroz sorrindo")
  }
}
