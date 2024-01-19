import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer` 
//traerme el elemento recuento de palabras para despues poder imprimir el resultado

let textarea = document.getElementsByName("user-input")[0]
// console.log(textarea);
textarea.addEventListener("keyup", function() { // funcion anonima
  let evenInput= textarea.value;
  // console.log(evenInput);
  let resultGetWordCount=analyzer.getWordCount(evenInput)
  // console.log(resultGetWordCount);
  document.querySelector('li[data-testid="word-count"]').innerHTML = 'Recuento de palabras ' + resultGetWordCount
})
// textarea.addEventListener("vista",function() {
//   const words= analyzer.getWordCount (textarea.value);
//   document.querySelector(".wordCount").innerHTML= palabras + words 
// })

// 1.1 Darle evento = (accion en el navegador, como un click o mover el mouse)
// 1.1 Continuacion: al momento que la usuaria esta escribiendo a textarea
//Actualizar al momento de la interacciòn de textarea con la usuaria las metricas


// Borrar las palabras de c/u de los li, querySelector es un método de JavaScript que permite seleccionar
// el primer elemento del documento que coincide con un grupo especificado de selectores CSS
// const wordCount = document.querySelector( ".word-count")
//wordCount.innerHTML= "contar palabras -1 "
// console.log (wordCount)
//Borrar las palabras de textarea con el boton de reset y limpiar metricas)


// llamar al metodo de analyzer donde sume las palabras que ingreso el usuario

