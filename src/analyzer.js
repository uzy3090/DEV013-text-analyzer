const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const wordCount = text.split(' ').length
    //console.log(wordCount)
    return wordCount
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const characterCount = text.split("").length
    //console.log(characterCount)
    return characterCount
  },
  getCharacterCountExcludingSpaces: (text) => {
  //   //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    return(text.replace(/[^a-zA-Z0-9]/g, "").length)
  },
  // restar espacios y signos de puntuaciòn 
  // retornar la suma de caracteres
  // getAverageWordLength: (text) => {
 
  getNumberCount: (text) =>{
  //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string``
  // recibimos todo el texto
  //  tener una variable con  el total de nuemros
    let contador=0 
    // separar los elementos
    const words = text.split(' ');
    //console.log(words)
    // Saber cuando algo es un numero
    for(let elemento = 0; elemento< words.length; elemento++){

      if(isNaN( parseInt(words[elemento]))){
      //  console.log('No es numero'+ words[elemento]); // true--- no convierte a número
      }else {
       // console.log('si hay numero' + words[elemento]); 
        if(Number(words[elemento])){
          contador=contador+1
        }
      }
    }
    return contador
  },
  getNumberSum: (text) => {
  //   //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
  // omitir las letras, espacios, caracteres 
  // realizar una suma de c/u de los numeros colocados en el textarea
    let suma=0 
    // separar los elementos
    const words = text.split(' ');
    //console.log(words) 
    for(let elemento = 0; elemento< words.length; elemento++){

      if(isNaN( parseFloat(words[elemento]))){
        //console.log('No es numero'+ words[elemento]); // true--- no convierte a número
      }else{
        //console.log('si hay numero' + words[elemento]); 
        if(Number(words[elemento])){
          // console.log(typeof(words[elemento]))
          const number = words [elemento];
          suma=suma + parseFloat(number);
        }
      }
    }
    return suma
  },
  getAverageWordLength: (text) => {
  //   //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
  //Para encontrar el promedio de un array, tenemos que encontrar
    //la suma de todos los elementos presentes en un array usando un bucle
    // y luego dividir la suma con el número de elementos presentes en el array
    const a= analyzer.getCharacterCountExcludingSpaces(text);
    const b= analyzer.getWordCount(text);
    const division = a/b 
    return division.toFixed(2);
 
  


  },
}
export default analyzer
