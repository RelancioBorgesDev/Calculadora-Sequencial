import chalk from 'chalk'

import infixa from '../infixa.js'
import posfixa from '../posfixa.js'

function exibeConsole(expressaoOriginal){
    let infix = new infixa();
    let postfix = new posfixa();
    let expressaoPosfixa = infix.infixToPrefix(expressaoOriginal)

    console.log(chalk.bold.green(`Expressão original: ${expressaoOriginal}`))
    console.log(chalk.bold.green(`Expressão pós-fixa: ${expressaoPosfixa}`))
    console.log(chalk.bold.green(`Sequencia de cálculos: `))
    let resultado = postfix.postfixToResult(expressaoPosfixa)
    console.log(chalk.bold.green(`Resultado: ${resultado}`))

   

}

export default exibeConsole