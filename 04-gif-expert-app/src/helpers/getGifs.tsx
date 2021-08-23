export const getGifs = async (category: any) => {
  //construimos una url con postman, posee el apikey, la query y el limite de objetos
  //pedimos la data a la api con la url simulada en postman
  //almacenamos la informacion en formato json, desestructuramos para tomar solo lo que necesitamos
  //recorremos el array y de toda la info extraemos a una variable lo buscado
  const url = `https://api.giphy.com/v1/gifs/search?q=${category}&limit=9&api_key=XnAQR9PjXKbZqtSbelTWYwpVoBZgFU7x`;
  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map(
    (img: {
      id: any;
      title: any;
      images: { downsized_medium: { url: any } };
    }) => {
      return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized_medium.url,
      };
    }
  );
  return gifs;
};
