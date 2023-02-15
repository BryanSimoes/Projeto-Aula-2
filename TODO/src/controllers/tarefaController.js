//Importa o bd.js para poder usar o banco de dados simulado
import {bdTarefas} from "../bd.js"

import Tarefa from "../models/tarefa.js"
class tarefaController {
    static rotas(app){
        // Rota para o recurso tarefa
        app.get('/', tarefaController.listar)
        app.post('/', tarefaController.inserir)
    }

    static listar(req, res){
        const tarefa = new Tarefa ('titulo da tarefa', 'descrição de tarefa', 'A fazer', new Date())
        res.send('Rota ativada com GET e recurso tarefa: lista de tarefas deve ser retornada')
    
    // console log do objeto tarefa
    console.log(tarefa)
}

    static inserir(req, res){
        res.send('Rota ativada com POST e recurso tarefa: tarefa deve ser inserida')
        // Console log do corpo da requisição
        console.log(req.body)
    }
}

export default tarefaController