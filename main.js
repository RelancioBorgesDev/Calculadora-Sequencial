import inquirer from 'inquirer'
import verificacao from './utils/verificaInput.js'

class main {
	constructor(){}

inputUsuario(){
	inquirer
	//Recebe o input do usuario
		.prompt([
			{
				type: 'input',
				name: 'expressao',
				message:'Digite a expressao matemática',
			}
		])
		.then(async (resposta) => {
		//Armazenando o input do usuario, expressao Infixa
		let inputUsuario = resposta.expressao
		
		//Funcao que verifica o input do usuário		
		let novaVerificacao = new verificacao()
		novaVerificacao.verificaInput(inputUsuario)
		
			
		})

	}
}

	let execucao = new main()
	execucao.inputUsuario()

