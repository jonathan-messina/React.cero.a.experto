//Fetch API obtiene datos de una API, con el metodo fetch.

const apiKey = "ZBguuXadyOAknaDiwLPm8c0HzXbCYSbr";

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion //Promesas en cadena
  .then((resp) =>
    resp
      .json() //rel resultado de la promesa, pasa al siguiente then
      .then(({ data }) => {
        const { url } = data.images.original;

        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);
      })
      .catch(console.warn)
  );
