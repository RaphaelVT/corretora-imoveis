const prompt = require("prompt-sync")();
const db = [];

let ultimoid = 0;

// function getIndice(id) {
    
// }
function model(id = ++ultimoid) {
    const nome = prompt("Digite o nome: ");
    if (nome != " ") {
    return {
        id,
        nome,
        }
    }

    console.log("Dados inválidos");
}
function criar() {
    const novo = model()
    if (novo) {
        db.push(novo)
        console.log(`Registro criado com sucesso!`);
    }

}
function listar() {
    if (db.length == 0) {
        console.log(`Nenhum registro encontrado!`);
        return false;
    }
    db.forEach(el => console.log(el))
    return true;
}

function atualizar() {
    if (listar()) {
        const id = prompt("Digite o ID: ")

        const indice = db.findIndex(el => el.id == id)

        if (indice != -1) {
            const novo = model(id);
            if (novo) {
                db[indice] = novo
            }
        } else {
            console.log(`ID inexistente! `);
        }
    }
}

function remover() {
    if (listar()) {
        const id = prompt("Digite ID: ")

        const indice = db.findIndex(el => el.id == id);
        if (indice != -1) {
            db.splice(indice, 1)
            console.log("Removido com sucesso! ");
            
        } else {
            console.log("ID inexistente! ");
        }
    }
}

function sair() {
    if (sair()) {
        process.exit()
    }
}

module.exports = {
    criar,
    listar,
    atualizar,
    remover,
    sair
}