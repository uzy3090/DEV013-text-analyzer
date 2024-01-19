import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer` 
//traerme el elemento recuento de palabras para despues poder imprimir el resultado
const textarea = document.getElementsByName("user-input")[0]
// console.log(textarea);
textarea.addEventListener("keyup", function() { // funcion anonima
  const evenInput= textarea.value;
  // console.log(evenInput);
  const resultGetWordCount=analyzer.getWordCount(evenInput);
  // console.log(resultGetWordCount);
  document.querySelector('li[data-testid="word-count"]').innerHTML = 'Recuento de palabras ' + resultGetWordCount

  const resultcharacterCount=analyzer.getCharacterCount(evenInput);
  //console.log(resultGetCharacterCount);
  document.querySelector('li[data-testid="character-count"]').innerHTML = 'Recuento de caracteres' + resultcharacterCount 

  const resultgetCharacterCountExcludingSpaces=analyzer.getCharacterCountExcludingSpaces (evenInput)
  //console.log(resultgetCharacterNoSpacesCount)
  document.querySelector('li[data-testid="character-no-spaces-count"]').innerHTML='Caracteres sin espacio y puntuacion' + resultgetCharacterCountExcludingSpaces

  const resultGetNumberCount= analyzer.getNumberCount (evenInput)
  //console.log (resultGetNumberCount)
  document.querySelector('li[data-testid="number-count"]').innerHTML= 'Recuento de numeros' + resultGetNumberCount

  const resultGetNumberSum= analyzer.getNumberSum (evenInput)
  //console.log(resultgetNumberSum)
  document.querySelector('li[data-testid="number-sum"]').innerHTML= 'Suma total de numeros' + resultGetNumberSum

  const resultGetAverageWordLength= analyzer.getAverageWordLength (evenInput)
  //console.log(resultgetAverageSum)
  document.querySelector('li[data-testid="word-length-average"]').innerHTML= 'Longitud media de palabras' + resultGetAverageWordLength

  //Event Listener Botón 
  const button=document.getElementById("reset-button"); 
  button.addEventListener("click", resetMetricas) 
  function resetMetricas(){
    document.querySelector("textarea").value="";
    document.querySelector('li[data-testid="word-count"]').innerHTML ="Recuento de palabras: ";
    document.querySelector('li[data-testid="character-count"]').innerHTML = " Recuento de caracteres: ";
    document.querySelector('li[data-testid="character-no-spaces-count"]').innerHTML="Caracteres sin espacio y puntuacion: ";
    document.querySelector('li[data-testid="number-count"]').innerHTML = "Recuento de numeros: ";
    document.querySelector('li[data-testid="number-sum"]').innerHTML = "Suma total Números: ";
    document.querySelector('li[data-testid="word-length-average"]').innerHTML = "Longitud media de palabras: ";
  
  
  }
})

