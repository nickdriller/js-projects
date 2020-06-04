document.addEventListener('DOMContentLoaded', () => {

  //Selectores
  const agregarEntrada = document.querySelector('.agregar-todo__entrada')
  const agregarBoton = document.querySelector('.agregar-todo__boton')
  const lista = document.getElementById('lista')
 

  //Event Listeners
  agregarBoton.addEventListener('click', agregarTodo)
 
  //FUNCIONES
  function agregarTodo(event){
    event.preventDefault()
    const listaTextoContenido = agregarEntrada.value

    // Validación texto
    /*
    if(!listaTextoContenido){
      const mensajeError = document.createElement('p')
      mensajeError.textContent = 'wea vacia'
      formulario.appendChild(mensajeError)
      return false
    }
    */

    // Cada li.lista__item
    const listaItem = document.createElement('li')
    listaItem.classList.add('lista__item')
    lista.appendChild(listaItem)

    // Texto
    const listaTexto = document.createElement('span')
    listaTexto.textContent = listaTextoContenido
    listaItem.appendChild(listaTexto)

    // Check
    const listaCheck = document.createElement('input')
    listaCheck.setAttribute('type', 'checkbox')
    listaCheck.addEventListener('change', finalizada)
    listaItem.appendChild(listaCheck)

    // Botón eliminar
    const listaBoton = document.createElement('button')
    listaBoton.textContent = 'Eliminar'
    listaBoton.addEventListener('click', eliminarTodo)
    listaItem.appendChild(listaBoton)

    // Limpiar input y agregar focus
    agregarEntrada.value = ''
    agregarEntrada.focus()

    // Función eliminar to-do
    function eliminarTodo(event){
      const lista = event.target
      lista.parentElement.remove()
      lista.parentElement.remove()
    }

    // Funcion finalizada
    function finalizada(evento){
      const lista = evento.target.parentElement
      lista.classList.toggle('lista__item--checked')
    }
  }
})