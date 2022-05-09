class Queue {
    constructor(){
        this.array = []
    }

    peek(){
        return this.array[0]
    }

    enqueue(valor){
       this.array.push(valor)
    }

    dequeue(){
        const valorRemovido = this.array.pop()

        return valorRemovido;
    }

    filtrar(item){
        let filtrado = this.array.filter((valor) => valor !== item)

        return filtrado
    }
}


export default Queue;