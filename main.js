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

do{
    console.log("Inicia el combate")
    console.log(`${Heroe.nombre} ${"- HP"} ${Heroe.vidaActual} ${"/"} ${Heroe.vidaMax}`)
    console.log(`${Limo.nombre} ${"- HP"} ${Limo.vidaActual} ${"/"} ${Limo.vidaMax}`)
    

} while((Heroe.vidaActual && Limo.vidaActual) > 0)