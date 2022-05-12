import inquirer from 'inquirer'
import verificacao from './utils/verificaInput.js'

class main {
	constructor(){}

static inputUsuario(){
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
			verificacao.verificaInput(inputUsuario)
		})

	}
}	
	//Executa todo o projeto
	main.inputUsuario()

