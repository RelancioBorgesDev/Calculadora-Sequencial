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


export {
    prioridadePosfixa,
    prioridadeInfixa
} 