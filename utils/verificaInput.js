import chalk from 'chalk'

import exibicao from './exibeConsole.js'


class verificacao {
    constructor(){}
    static async verificaInput(input){
        //Verifica se existe espaço em branco na String
        if (/\s/.test(input)) {
            exibicao.exibeConsole(input)
        }else{
            console.log(chalk.bold.red('ERRO!'))
            console.log(chalk.bold.red('A expressão deve conter espaço entre cada caracter, exemplos: ( 200 + 5 ) ou -20 + 30')) 
            console.log(chalk.bold.red('Rode a aplicação novamente.'))
        }
    }

}

//Exporta a classe verificacao
export default verificacao