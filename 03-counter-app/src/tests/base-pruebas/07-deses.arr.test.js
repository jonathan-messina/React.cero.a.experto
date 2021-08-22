import "@testing-library/jest-dom";
import { retornaArreglo } from "../../base-pruebas/07-deses-arr.js";

describe("Pruebas en desestructuracion", () => {
  test("debe de retornar un string y un numero", () => {
    const [letras, numeros] = retornaArreglo(); //['ABC',123]
    //podemos desestructurar y separar los expect
    //con typeof mostramos en pantalla el tipo de dato
    expect(letras).toBe("ABC");
    expect(typeof letras).toBe("string");
    expect(numeros).toBe(123);
    expect(typeof numeros).toBe("number");
  });
});
