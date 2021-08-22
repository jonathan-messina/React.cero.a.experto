/* eslint-disable no-unused-vars */
import "@testing-library/jest-dom";
import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe("Pruebas en 05-funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "NekoNeko",
    };
    const user = getUser();

    expect(user).toEqual(userTest);
    //comparar dos objetos siempre dara falso, ya que apuntan a espacios distintos en memoria, para compararlos usamos el metodo to.Equal,evalua por propiedad y valor, pero no por tipo.
  });
  test("getUsuarioActivo debe de retornar un objeto y recibir un argumento", () => {
    const nombre = "Jonathan";
    const userActiveTest = {
      uid: "ABC567",
      username: nombre,
    };
    const userActive = getUsuarioActivo(nombre);

    expect(userActive).toEqual(userActiveTest);
  });
});
