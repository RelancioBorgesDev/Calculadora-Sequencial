import Stack from './classes/Stack.js';
import Queue from './classes/Queue.js';
import { prioridadeInfixa } from './utils/Prioridades.js';


class infixa{
	constructor(){}
    //Metodo desempilhar
	desempilhar(pilha, fila){
		if(pilha.length != 0){
			for(let j = pilha.length; j >= pilha.length -1; j--){
				let valoresSaida = pilha.pop()
				fila.enqueue(valoresSaida)
				if(pilha.length == 0){
					break;
				}
			}
		}
	}

	infixToPrefix(expressao){
		const pilha = new Stack();
		const fila = new Queue();
		const arrExpInfixa = expressao.split(" ")

    //Loop na expressao
    for(let i = 0; i < arrExpInfixa.length; i++){

        //Se for operando ja vai para o final da filaSaida
        if(!prioridadeInfixa[arrExpInfixa[i]] && arrExpInfixa[i] !== "(" && arrExpInfixa[i] !== ")"){
            fila.enqueue(arrExpInfixa[i])
        }

        //Se for operação
        if(prioridadeInfixa[arrExpInfixa[i]] && arrExpInfixa[i] !== "(" && arrExpInfixa[i] !== ")"){
            if(pilha.length == 0){
                pilha.push(arrExpInfixa[i])
            }else if(prioridadeInfixa[arrExpInfixa[i]] > prioridadeInfixa[pilha[pilha.length -1]]){
                pilha.push(arrExpInfixa[i])
            }else if(prioridadeInfixa[arrExpInfixa[i]] < prioridadeInfixa[pilha[pilha.length -1]]){
                let valorTopoPilha = pilha.pop()
                pilha.push(arrExpInfixa[i])
                fila.enqueue(valorTopoPilha)
            }else {
                pilha.push(arrExpInfixa[i])
            }
        }

        //Se for um parenteses abrindo
        if(arrExpInfixa[i] === "("){
            pilha.push(arrExpInfixa[i])      
        }

        //Se for um parenteses fechando
        if(arrExpInfixa[i] === ")"){
            while(pilha.includes("(")){
                fila.enqueue(pilha.pop())
            }     
        }
    }

    this.desempilhar(pilha, fila)

    let ultimaFila = fila.filtrar("(")

    return ultimaFila.join(" ")

	}
}

export default infixa