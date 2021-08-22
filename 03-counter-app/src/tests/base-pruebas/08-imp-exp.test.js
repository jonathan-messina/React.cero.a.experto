import "@testing-library/jest-dom";
import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";
import heroes from "../../data/heroes";

describe("Pruebas en 08-imp-exp.js", () => {
  test("debe retornar un heroe por id", () => {
    const id = 1;
    const heroe = getHeroeById(id);

    const heroeData = heroes.find((h) => h.id === id);
    expect(heroe).toEqual(heroeData);
    //probamos que el id sea igual al id en el archivo json
  });
  test("debe retornar undefined si heroe no existe", () => {
    const id = 10;
    const heroe = getHeroeById(id);

    expect(heroe).toBe(undefined);
  });
  test("debe retornar un arreglo con los heroes de dc", () => {
    const owner = "DC";
    const heroes = getHeroesByOwner(owner);
    const heroesData = heroes.filter((heroe) => heroe.owner === owner);

    expect(heroes).toEqual(heroesData);
  });
  test("debe retornar un arreglo con los heroes de Marvel", () => {
    const owner = "Marvel";
    const heroes = getHeroesByOwner(owner);

    expect(heroes.length).toBe(2);
    //solo tenemos 3 heroes de marvel, por lo que consultamos por el largo del array unicamente
  });
});
