let Heroe = {
    nombre : "Heroe",
    vidaMax : 120,
    vidaActual : 120,
    dano : 50
};

let Limo = {
    nombre : "Limo",
    vidaMax : 100,
    vidaActual : 100,
    dano : 20

};

 console.log("Inicia el combate")
do{
    console.log(`${Heroe.nombre} ${"- HP"} ${Heroe.vidaActual} ${"/"} ${Heroe.vidaMax}`)
    console.log(`${Limo.nombre} ${"- HP"} ${Limo.vidaActual} ${"/"} ${Limo.vidaMax}`)
    console.log(`${Heroe.nombre} ${"deals"} ${Heroe.dano} ${"DMG to"}${Limo.nombre}`)
    Limo.vidaActual = Limo.vidaActual-Heroe.dano;
    console.log(`${Limo.nombre} ${"deals"} ${Limo.dano} ${"DMG to"}${Heroe.nombre}`)
    Heroe.vidaActual=Heroe.vidaActual-Limo.dano;

} while((Heroe.vidaActual && Limo.vidaActual) > 0)