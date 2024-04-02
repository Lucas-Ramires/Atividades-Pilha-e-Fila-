import { colors } from "./util/Colors";
import { Stack } from "./Stack/Stack";

const leia = require('readline-sync');
const pilha = new Stack<string>();

let opcao: number;

do{
        console.log(colors.bg.black, colors.fg.cyanstrong,
                  "***************************************************\n");
        console.log(" 1 - Adicionar Livro na Fila");
        console.log(" 2 - Lista dos Livros na pilha");
        console.log(" 3 - Retirar Livro da Fila");
        console.log(" 0 - Sair \n");
        console.log("  ***************************************************",
            colors.reset);

        console.log("Entre com a opcao desejada: \n");
        opcao = leia.questionInt("");


        switch(opcao){
            case 1:
                console.log("\nAdicione um livro na pilha: ");
                const livro = leia.question("");
                pilha.push(livro);
                console.log("Livro Adicionado!")      
                break;

            case 2:

                if(pilha.isEmpty()){
                console.log("A pilha esta vazia!");
                }else{
                    console.log("Os livros que estao na pilha: ")
                    pilha.printStack();
                }           
                break;

            case 3:
                if(pilha.isEmpty()){
                console.log("A pilha esta vazia!")
                }else{
                    pilha.pop();
                    console.log("Os livros que estao na pilha: ")
                    pilha.printStack();
                    console.log("Um Livro foi retirado da pilha!")
                }            
                break;

            case 0:
            console.log("\nPrograma Finalizado!\n");
            sobre();
                break;
            default:
                console.log("Opcao invalida!");
                
                break;        
        }
    }while(opcao !== 0) 
function sobre(): void {
    console.log(colors.bg.black, colors.fg.greenstrong,
        "                                                       ");
    console.log("*******************************************************");
    console.log("Projeto Desenvolvidor por: Lucas Ramires");
    console.log("E-mail: kotecbr@outlook.com");
    console.log("https://github.com/Lucas-Ramires");
    console.log("*******************************************************")
    console.log("                                                       ",
        colors.reset);
}