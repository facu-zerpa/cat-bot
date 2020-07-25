import moment from "moment";

export let doing = [
  {
    msg: ["Estaba afilando mis uñas en el sillon c:"],
  },
  {
    msg: ["Estoy enojado", "Sera mejor que me dejes en paz"],
  },
  {
    msg: ["Hablo con vos, que mas haria?"],
  },
  {
    msg: ["Busco un nuevo hobbie de cuarentena... Alguna idea?"],
  },
  {
    msg: ["Zzzz, ups. Lo sientos sos medio aburrido"],
  },
];

export let aboutMe = [
  {
    msg: ["Mmm...", "A veces no entiendo al humano"],
  },
  {
    msg: ["Me gusta mirar a mi dueño mientras esta en el baño"],
  },
  {
    msg: [
      "Enserio creen que algun dia hare caso?",
      "Pobres humanos...",
      "Ilusos",
    ],
  },
  {
    msg: ["Soy el gato con mas seguidores de Instagram... Okno", "Seguime @catbot"],
  },
];

export let time = [
  {
    msg: [moment().format("LT"), "Es hora de dormir Zzz...", "Chau!"],
  },
  {
    msg: [moment().format("LT"), "Hora de comer!", "Tengo hambre"],
  },
];

export let day = [
  {
    msg: [moment().format("L"), "Hoy me toca ir al veterinario! Noo :c"],
  },
  {
    msg: [moment().format("L"), "Es mi cumpleaños!", "Que me vas a regalar?"],
  },
];
