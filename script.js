function toogleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto do Douglas Martins sorrindo, ao lado de sua esposa Monise Martins em frente a praia ambos sorrindo.")
  } else {
    img.setAttribute("src", "./assets/Avatar.png")
    img.setAttribute(
      "alt",
      "Foto do Douglas Martins sorrindo, ao lado de sua esposa Monise Martins dentro de um carro."
    )
  }
}
