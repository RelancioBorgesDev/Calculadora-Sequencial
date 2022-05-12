import Node from './Node.js'

class Stack{
	constructor(){
		this.top = null;
		this.length = 0;
	}
	//Adiciona o valor na Pilha
	push(element){
		this.top = new Node(element, this.top);
		this.length++;
	}
	//Verifica se a pilha está vazia
	isEmpty(){
		if (this.length > 0 && this.top != null){
			return false;
		}
		else{
			return true;
		}
	}
	//Retira o elemento da pilha
	pop(){
		var c = "";
		if (this.length > 0 && this.top != null){
			var temp = this.top;
		
			this.top = temp.next;
			this.length--;
			c = temp.element;
		}
		return c;
	}
	//Retorna o valor do topo se existir
	peek(){
		if (this.top == null){
			return "";
		}
		return this.top.element;
	}
	//Verifica se o valor existe na Pilha
	includes(valor){
		let array = []
		let currentNode = this.top

		while(currentNode != null){
			array.push(currentNode.element)
			currentNode = currentNode.next
		}

		for(let i = 0; i < array.length; i++){
			if(array[i] == valor){
				return true
			}
		}

		return false;
	}
}

export default Stack