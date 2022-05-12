# PROJETO 01 – GERAÇÃO DA SEQUÊNCIA DE CÁLCULOS EM UMA EXPRESSÃO ARITMÉTICA.

### UNITAU - 2022 | 5º Semestre Engenharia da Computação - Estrutura de Dados - Prof: Enari

## Alunos - Cristiano e Relancio

# Tópicos:

_1_) Explicações, Restrições e Instruções do Projeto

_2_) Pastas - Arquivos e Dependências

1. Diretórios:

   - classes
   - node_modules
   - utils

2. Arquivos:

   - infixa.js
   - posifxa.js
   - main.js

3. Dependências:
   - chalk
   - inquirer

# _1_) Explicações, Restrições e Instruções do Projeto

## Explicações

     - O Projeto foi implementado utilizando Javascript (Node JS no Replit)
     - Javascript não apresenta algumas estruturas de dados que são necessárias para o desenvolvimento do projeto, então para solucionar esse problema, desenvolvemos as classes *Stack* e *Queue* com seus respectivos métodos.
     - O Javascript não apresenta uma forma de receber o input do usuário como em outras linguagens, então para receber o input do usuário com a expressão, utilizamos uma biblioteca chamada inquirer.

## Restrições e Instruções

     - VSCODE:
          - Para executar o projeto no VSCODE é necessário ter o Node instalado em sua máquina.
          - Antes de utilizar o projeto é necessário baixar todas as dependências do projeto, basta digitar npm install ou yarn no console, que todas as dependências do projeto serão baixadas.
          - Para poder executar o projeto no console do VSCode, é necessário digitar npm start ou yarn start, se tiver o yarn instalado na máquina
     - Replit:
          - Para executar o Projeto clique no botão verde escrito "=> Run" no topo da tela.
          - Se quiser executar uma parte especifíca do codigo, clique em "Shell" ao lado de "Console" e digite node e depois especifíque qual arquivo deseja executar
     - Input da Expressão:
          - Para que possa ser executada a expressão o usuário deve digitar no console a expressão contendo espaços entre cada caractere.
          - Caso não seja seguida essa instrução, irá ser exibido um erro no console, execute o programa novamente e digite da forma correta.

# _2_) Pastas - Arquivos e Dependências

     1) - Diretórios
          - classes:
               - A pasta classes apresenta as classes Node, Queue e Stack, essas classes são responsáveis pela criação da fila e da pilha que são utilizadas no desenvolvimento do projeto.
          - node_modules:
               - Pasta responsável por armazenar as dependências e outras coisas gerais do projeto.
          -  utils:
               - Pasta responsável por armazenar os arquivos de "utilidade", são partes do código separadas para serem usadas nos arquivos principais, main, infixa e posfixa .js.

     2) - Arquivos
          - infixa.js:
               - Arquivo que apresenta o código responsável por transformar a expressão digitada pelo usuário em expressão pós-fixa.
          - posifxa.js:
               - Arquivo que apresenta o código responsável por receber a expressão pos-fixa e retornar o resultado das operações.
          - main.js:
               - Arquivo que apresenta o código responsável por receber o input do usuário e executar os métodos de impressão no console.
     3) - Dependências:
          - chalk:
               - Biblioteca responsável pela personalização da saída no console.
           - inquirer:
               - Biblioteca responsável por receber o input do usuário
