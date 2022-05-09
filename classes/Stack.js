import Node from './Node.js'

class Stack{
	constructor(){
		this.top = null;
		this.length = 0;
	}

	push(element){
		this.top = new Node(element, this.top);
		this.length++;
	}
	isEmpty(){
		if (this.length > 0 && this.top != null)
		{
			return false;
		}
		else
		{
			return true;
		}
	}

	pop(){
		var c = "";
		if (this.length > 0 && this.top != null)
		{
			var temp = this.top;
		
			this.top = temp.next;
			this.length--;
			c = temp.element;
		}
		return c;
	}
	peek(){
		if (this.top == null)
		{
			return "";
		}
		return this.top.element;
	}

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