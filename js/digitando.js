function escreverLento(elemento) {
  const textoArray = elemento.innerHTML.split('')
  elemento.innerHTML = ''
  textoArray.forEach((letra, index) => {
    setTimeout(function () {
      elemento.innerHTML += letra
    }, 300 * index)
  })
}

escreverLento(document.querySelector('#digitar'))
