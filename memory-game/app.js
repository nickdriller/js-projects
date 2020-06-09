document.addEventListener('DOMContentLoaded', () =>{

  const tablero = document.getElementById('tablero')
  const arrayFichas = [
    {
      name: 'fries',
      src: './images/fries.png'
    },
    {
      name: 'cheeseburger',
      src: './images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      src: './images/ice-cream.png'
    },
    {
      name: 'pizza',
      src: './images/pizza.png'
    },
    {
      name: 'milkshake',
      src: './images/milkshake.png'
    },
    {
      name: 'hotdog',
      src: './images/hotdog.png'
    },
    {
      name: 'fries',
      src: './images/fries.png'
    },
    {
      name: 'cheeseburger',
      src: './images/cheeseburger.png'
    },
    {
      name: 'ice-cream',
      src: './images/ice-cream.png'
    },
    {
      name: 'pizza',
      src: './images/pizza.png'
    },
    {
      name: 'milkshake',
      src: './images/milkshake.png'
    },
    {
      name: 'hotdog',
      src: './images/hotdog.png'
    }
  ]

  // Alternar posición de las fichas
  arrayFichas.sort( () => 0.5 - Math.random() )

/* 
  Crear tablero con las imágenes del array.
  A cada ficha se agrega el atributo 'data-id' y se le asigna un evenListener
*/
  function crearTablero () {
    for (let index = 0; index < arrayFichas.length; index++) {
      const ficha = document.createElement('img')
      ficha.setAttribute('src', './images/back.png')
      ficha.setAttribute('data-id', index)
      ficha.addEventListener('click', darVuelta)
      tablero.appendChild(ficha)
    }
  }
  crearTablero()

/* 
  Se crean 2 array para guardar el atributo 'data-id' y el objeto al que
  pertenece esa ficha
*/
  let fichasElegidas = []
  let fichaElegidaID = []
  
  function darVuelta(){
    // Guardar el atributo 'data-id' para usarlo como indice y acceder a la podición del array
    const fichaID = this.getAttribute('data-id')
    this.setAttribute('src', arrayFichas[fichaID].src)
    fichaElegidaID.push(fichaID)
    fichasElegidas.push(arrayFichas[fichaID])
    
    if (fichasElegidas.length === 2){
      setTimeout(buscarMatch, 500)
    }
  }

  function buscarMatch () {
    const fichaIdUno = fichaElegidaID[0]
    const fichaIdDos = fichaElegidaID[1]
    const fichas = document.querySelectorAll('img')

    if( fichasElegidas[0].name === fichasElegidas[1].name ){
      fichas[fichaIdUno].setAttribute('src', './images/white.png')
      fichas[fichaIdDos].setAttribute('src', './images/white.png')
    } else {
      setTimeout(() => {
        fichas[fichaIdUno].setAttribute('src', './images/back.png')
        fichas[fichaIdDos].setAttribute('src', './images/back.png')
      }, 300)
      
    }
    // Limpiar array para validar el próximo par de fichas
    fichasElegidas = []
    fichaElegidaID = []
  }
})