import chalk from 'chalk'

import infixa from '../infixa.js'
import posfixa from '../posfixa.js'

class exibicao {
    static exibeConsole(expressaoOriginal){
        //Chamada das Classe Infixa e Posfixa
        let infix = new infixa();
        let postfix = new posfixa();
        
        //Armazena a expressao Posfixa
        let expressaoPosfixa = infix.infixToPrefix(expressaoOriginal)

        //Imprime a expressao original (Infixa)
        console.log(chalk.bold.green(`Expressão original: ${expressaoOriginal}`))

        //Imprime a expressao pós-fixa
        console.log(chalk.bold.green(`Expressão pós-fixa: ${expressaoPosfixa}`))

        //Exibe a sequencia de calculos
        console.log(chalk.bold.green(`Sequencia de cálculos: `))
        let resultado = postfix.postfixToResult(expressaoPosfixa)
        console.log(chalk.bold.green(`Resultado: ${resultado}`))
    
    }
}


export default exibicao