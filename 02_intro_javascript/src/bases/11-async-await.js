//Async - Await
// forma mas sencilla de crear promesas

// 1) promesa

/* const getImagenPromesa =() => {
    const promesa = new Promise( (resolve, reject) =>{
    resolve('https://nfjfdj.com)
    })
    return promesa;
}
getImagenPromesa().then(console.log);*/

// 2) misma promesa pero resumida

/* const getImagenPromesa = () => new Promise (resolve => resolve('https://gfsdfsdfsd.com)) */

// 3) misma promesa pero con async

/*const getImagen = async () => {
return "https://kakakakfdga.com";
};

getImagen().then(console.log); */

// 4) await
//pone breakpoints en el codigo, la linea donde esta el await debe ejecutarse y obtener su respuesta, antes de poder continuar ejectuando el resto del codigo.

//await debe estar dentro de una funcion async para funcionar

const getImagen = async () => {
  try {
    const apiKey = "ZBguuXadyOAknaDiwLPm8c0HzXbCYSbr";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.append(img);
  } catch (error) {
    //manejo del error
    console.error(error);
  }
};

//async convierte a una funcion normal en promesa.
