function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')

    //pegar a tag img
    const image = document.querySelector("#profile img")
   
    if(html.classList.contains('light')) {
    // se tiver light mode, adcionar a imagem light
    image.setAttribute('src', './assets/avatar-light.png')
    } else {
    // se não tiver o light mode, manter a imagem normal   
    image.setAttribute('src', './assets/avatar.png')
    }
}