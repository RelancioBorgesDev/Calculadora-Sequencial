class Queue {
    constructor(){
        this.array = []
    }
    //Metodo para receber o primeiro valor da Fila
    peek(){
        return this.array[0]
    }
    //Adicionar um elemento na fila
    enqueue(valor){
       this.array.push(valor)
    }
    //Remover e retornar o elemento da fila
    dequeue(){
        const valorRemovido = this.array.pop()

        return valorRemovido;
    }
    //Retornar a fila filtrada
    filtrar(item){
        let filtrado = this.array.filter((valor) => valor !== item)

        return filtrado
    }
}


export default Queue;