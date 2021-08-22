export const heroes = [
  {
    id: 1,
    name: "Batman",
    owner: "DC",
  },
  {
    id: 2,
    name: "Spiderman",
    owner: "Marvel",
  },
  {
    id: 3,
    name: "Superman",
    owner: "DC",
  },
  {
    id: 4,
    name: "Flash",
    owner: "DC",
  },
  {
    id: 5,
    name: "Wolverine",
    owner: "Marvel",
  },
];
// export individual:

export const owners = ["DC", "Marvel"];

export default heroes;

//export multiple:

//const owners = ["DC", "Marvel"];

// export {
//   heroes as default,
//   owners,
// }

//se puede especificar cual sera una exportacion comun y cual por default con "as default"
