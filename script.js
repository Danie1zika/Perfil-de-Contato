function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");

    // Pegar a tag img
    const img = document.querySelector("#profile img");

    // Substituir a imagem
    if(html.classList.contains("light")) {
        // Se tiver lightMode, preciso adicionar a imagem light
        img.setAttribute("src", "./assets/light-monkey.png");
    } else {
        // Se estiver sem lightMode, manter a imagem atual
        img.setAttribute("src", "./assets/monkey.png");
    }
}