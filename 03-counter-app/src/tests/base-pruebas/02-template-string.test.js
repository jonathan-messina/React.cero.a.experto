import "@testing-library/jest-dom";
import { getSaludo } from "../../base-pruebas/02-template-string";
describe("Pruebas en 02-template-string.js", () => {
  test("prueba en el metodo getSaludo", () => {
    const nombre = "Jonathan";

    const saludo = getSaludo(nombre);

    expect(saludo).toBe("Hola " + nombre + "!");
  });
  test("getSaludo debe regresar Hola Carlos! si no hay argumentos nombre", () => {
    const saludo = getSaludo();

    expect(saludo).toBe("Hola Carlos!");
  });
});
