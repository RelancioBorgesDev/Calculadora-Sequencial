import chalk from 'chalk'

import exibeConsole from './exibeConsole.js'


class verificacao {
    constructor(){}

    async verificaInput(input){
        if (/\s/.test(input)) {
            exibeConsole(input)
        }else{
            console.log(chalk.bold.red('ERRO!'))
            console.log(chalk.bold.red('A expressão deve conter espaço entre cada caracter, exemplos: ( 200 + 5 ) ou -20 + 30')) 
        }
    }

}


export default verificacao