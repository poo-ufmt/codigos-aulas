import { Compositor } from "./Compositor";
import { Musica } from "./Musica";

let mirosmar = new Compositor("Mirosmar Silva", new Date("2020-01-01"));
let josivaldo = new Compositor("Josivaldo", new Date("2000-01-01"));

let sinonimos = new Musica("Sinônimos", 100, 123, [mirosmar, josivaldo], ["José da Silva"]);


let teste = new Compositor("Josivaldo", new Date("2000-01-01"));

sinonimos.removerCompositor(teste);

console.log(sinonimos.compositores);

sinonimos.compositores.forEach((compositor) => {
    console.log(compositor);
})
