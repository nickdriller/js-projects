/*
Agregar event listener 'input' a la etiqueta donde el usuario ingresara el número de
tarjeta. La función asignada al evento guardará cada valor que se ingrese como un string
*/
const inputNumeroTarjeta = document.getElementById('numero-tarjeta')
inputNumeroTarjeta.addEventListener('input', capturarNumero )

// Bo†ón que gatilla las funciones necesarias para valida el número ingresado
const botonVerificar = document.getElementById('verificar')
botonVerificar.addEventListener('click', verificarNumero)

// Array donde se guarda el número de tarjeta ingresado
let numeroTarjeta
function capturarNumero(event){
  numeroTarjeta = [event.target.value]
  return numeroTarjeta
}

//Hay que separar el string en caracteres individuales y luego situarlos en la posición inversa
function verificarNumero(event){
  event.preventDefault()
  const numeroTarjetaInverso = numeroTarjeta[0].split('').reverse()
  
  /*
  Se crean 2 arrays donde se guardarán los valores que están en la posición
  par e impar del array numeroTarjetaInverso
  */
  const posicionImpares = []
  const posicionPares = []
  numeroTarjetaInverso.filter( (item, indice) => {
    if (indice % 2 === 0){
      posicionImpares.push( parseInt(item, 10) )
    } else {
      posicionPares.push( parseInt(item, 10) * 2 )
    }
    return (posicionImpares, posicionPares)
  })
  
  /*
  Se crean otros 2 arrays (solo válido para los valores en la posición par)
  donde los valores que almacenarán dependen del resultado de esta expresión item * 2 >= a 10
  Además en el array mayoresDiez hay que separar cada número guardado en dígitos individuales
  */
  const mayoresDiez = []
  const menorDiez = []
  posicionPares.filter( item => {
    if( item >= 10 ){
      mayoresDiez.push(item.toString().split(''))
    } else{
      menorDiez.push(item)
    }
    return (mayoresDiez, menorDiez)
  })
  
  // Los dígitos individuales se deben sumar
  const sumarDigitos = mayoresDiez.map( (item) => parseInt(item[0], 10) + parseInt(item[1], 10) )
  
  // En un array --> todosLosDigitos guardamos todos los dígitos necesarios para realizar la validación del número ingresado
  const todosLosDigitos = [...posicionImpares, ...menorDiez, ...sumarDigitos]
  const totalNumeroTarjeta = todosLosDigitos.reduce( (total, item) => total+item)
  const validacion = totalNumeroTarjeta % 10 === 0 ? 'Tarjeta válida' : 'Arranca maldito estador!'

  console.log('ingresando...', numeroTarjeta)
  console.log('número tarjeta invertido', numeroTarjetaInverso)
  console.log('Impares', posicionImpares)
  console.log('Pares', posicionPares)
  console.log('Mayores o igual a 10', mayoresDiez)
  console.log('Menor de 10', menorDiez)
  console.log('Suma mayores', sumarDigitos)
  console.log('Todos los digitos', todosLosDigitos)
  console.log('Total digitos', totalNumeroTarjeta)
  console.log(validacion)
}