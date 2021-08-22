describe("Pruebas en el archivo demo.test.js", () => {
  //describe ayuda a dar orden a las pruebas, es opcional, pero brinda claridad, es basicamente un titulo agrupador, al tener muchas pruebas, se encuentra su utilidad.

  test("deben de ser iguales los string", () => {
    //1.Inicializacion
    const mensaje = "Hola mundo";
    //2.estimulo
    const mensaje2 = `Hola mundo`;
    //3.Observar el comportamiento
    //para evitar usar mucho codigo o condicionales, usamos las herramientas de jest
    //Herramienta expect().toBe()
    //const var={key:value}
    //expect(var.key).toBe(value) en expect se introduce la variable a probar, junto con el key del valor que buscamos igualar, y en tobe, ingresamos el valor que deberia tener, en resumen, preguntamos a la variable por un valor, y con toBe pedimos que el valor traido sea igual al valor que damos.
    expect(mensaje).toBe(mensaje2); // es igual a ===, compara por valor y  por tipo.
  });
});
