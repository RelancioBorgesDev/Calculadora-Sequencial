// "Mapas" das prioridades, utilizados nas classes infixa e posfixa e seus metodos
const prioridadePosfixa = {
    "+": (n1, n2) => n1 + n2,
    "-": (n1, n2) => n1 - n2,
    "/": (n1, n2) => n1 / n2,
    "*": (n1, n2) => n1 * n2,
    "^": (n1,n2) => Math.pow(n1, n2)
}

const prioridadeInfixa = {
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
};

//Exporta os dois "mapas"
export {
    prioridadePosfixa,
    prioridadeInfixa
} 