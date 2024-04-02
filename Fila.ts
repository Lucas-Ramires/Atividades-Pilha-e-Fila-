import { colors } from "./util/Colors";
import { Queue } from "./Queue/Queue"

const leia = require('readline-sync');
const fila = new Queue<string>();

let opcao: number;

do{
        console.log(colors.bg.black, colors.fg.cyanstrong,
                  "***************************************************\n");
        console.log(" 1 - Adicionar Cliente na Fila");
        console.log(" 2 - Listar todos os Clientes");
        console.log(" 3 - Retirar Cliente da Fila");
        console.log(" 0 - Sair \n");
        console.log("  ***************************************************",
            colors.reset);

        console.log("Entre com a opcao desejada: \n");
        opcao = leia.questionInt("");


        switch(opcao){
            case 1:
                const nome = leia.question("\nDigite o nome do cliente: ")
                fila.enqueue(nome);
                console.log("Na fila: ")
                fila.printQueue();
                console.log("\nCliente Adicionado!")       
                break;

            case 2:

                if(fila.isEmpty()){
                console.log("A Fila esta vazia!")
                }else{
                    console.log("Lista de Clientes na Fila")
                    fila.printQueue();
                }           
                break;

            case 3:
                if(fila.isEmpty()){
                console.log("A Fila esta vazia!")
                }else{
                    fila.dequeue();
                    console.log("Fila: ")
                    fila.printQueue();
                    console.log("O Cliente foi chamado!");
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

