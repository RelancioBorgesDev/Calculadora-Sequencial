import Stack from './classes/Stack.js'
import chalk from 'chalk'
import {prioridadePosfixa} from './utils/Prioridades.js'


class posfixa{
    constructor(){}

    postfixToResult(expressao){
        const pilha = new Stack()
        let numeros = expressao.trim().split(" ")

        let i = 1;

        for(let numero of numeros) {
            if(prioridadePosfixa[numero]){
                let n2 = pilha.pop();
                let n1 = pilha.pop();

              
                console.log(chalk.bold.green(`T${i} <= ${n1} ${numero} ${n2}   T${i} = ${prioridadePosfixa[numero](n1,n2)}`));
                i++

                pilha.push(prioridadePosfixa[numero](n1,n2));
            }else{
                pilha.push(parseInt(numero))
            }

    }

        return pilha.pop();
    }
}


export default posfixa