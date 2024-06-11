interface Artistas {
    grupo: string;
    fundacion: number;
    activo: boolean;
    genero: string;
}

const pop = "🎵 Pop Rock";
const rock = "🎸 Rock";
const hrock = "🤘 Hard Rock";
const clasica = "🎼 Clásica";
const estiloGrupo = "color: green; font-size:18px; font-weight:bold;";

const grupoA : Artistas = {
    grupo: "The Beatles",
    fundacion: 1960,
    activo: true,
    genero: pop,
};

const grupoB : Artistas = {
    
    grupo: "Queen",
    fundacion: 1970,
    activo: false,
    genero: rock,
};

const grupoC : Artistas = {
    
    grupo: "AC DC",
    fundacion: 1973,
    activo: true,
    genero: hrock,
};

const grupoD : Artistas = {
    
    grupo: "Ludwig van Beethoven",
    fundacion: 1962,
    activo: false,
    genero: clasica,
};

const grupoE : Artistas = {
    
    grupo: "The Rolling Stones",
    fundacion: 1962,
    activo: true,
    genero: rock,
};

console.log (`%c${grupoA.grupo}`,  estiloGrupo, `/ ${grupoA.fundacion} / Activo: ${grupoA.activo} / ${grupoA.genero}`);
console.log (`%c${grupoB.grupo}`,  estiloGrupo, `/ ${grupoB.fundacion} / Activo: ${grupoB.activo} / ${grupoB.genero}`);
console.log (`%c${grupoC.grupo}`,  estiloGrupo, `/ ${grupoC.fundacion} / Activo: ${grupoC.activo} / ${grupoC.genero}`);
console.log (`%c${grupoD.grupo}`,  estiloGrupo, `/ ${grupoD.fundacion} / Activo: ${grupoD.activo} / ${grupoD.genero}`);
console.log (`%c${grupoE.grupo}`,  estiloGrupo, `/ ${grupoE.fundacion} / Activo: ${grupoE.activo} / ${grupoE.genero}`);