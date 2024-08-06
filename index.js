const prompt = require("prompt-sync")();

const corretora = require("./modulos/corretora.js")


console.log(`GERENCIAMENTO DDE CORRETORA DE IMÓVEIS`);
while (true) {
    console.log(`O que deseja gerenciar? 
        1 - Corretora
        0 - Sair
    
    `);
    const opcaoEntidade = prompt()
    switch (opcaoEntidade) {
        case "1":
            while (true) {
                
                console.log(`GERENCIAMENTO DE CORRETORA
                    1 - Criar
                    2 - Listar
                    3 - Atualizar
                    4 - Remover
                    5 - Sair
                `);

                const opcaoServico = prompt();
                switch (opcaoServico) {
                        case "1":
                        corretora.criar()
                        break

                        case "2":
                        corretora.listar();
                        break;
                        case "3":
                        corretora.atualizar();
                        break;
                        case "4":
                        corretora.remover();
                        break;
                        case "5":
                        process.exit();
                        break;
                
                    default:
                        console.log(`
                        Selecione as opções acima!
                        `);
                        break;
                }
            }
            break;
    
        default:
            break;
    }
}

