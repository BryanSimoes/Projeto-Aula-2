import Usuario from "../models/usuario.js";
import db from "./dt.js";
//usuarios
const usuarios = ''




function criaTabelaUsr() {
    db.run(Usuario, (error)=> {
        if (error) console.log ("Erro ao criar tabela de usuarios")
    });
}

function populaTabelaUsr() {
    db.run(usuarios,(error)=> {
        if (error) console.log ("erro ao popular tabela de usuarios")
    });
}
//tarefas
const tarefas_Schema = ''



const tarefas_data = ''

db.serialize(()=> {
    criaTabelaUsr();
    populaTabelaUsr();
    criaTabelasUsr ();
    populaTabelasUsr();
}) ;

