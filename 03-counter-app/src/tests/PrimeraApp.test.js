import { render } from "@testing-library/jest-dom";
import PrimeraApp from "../PrimeraApp";

describe("Pruebas en <PrimeraApp/>", () => {
  test('debe de mostrar el mensaje "Hola, soy Goku"', () => {
    const saludo = "Hola, soy Goku"; //mensaje a evaluar
    const wrapper = render(<PrimeraApp />); //para hacer pruebas en componentes, se necesita renderizarlos
  });
});
