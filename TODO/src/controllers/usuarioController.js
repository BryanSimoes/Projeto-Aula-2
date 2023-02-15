//Importar  o bd.js para poder usar no banco de dados simulado
import { bdUsuarios } from "../bd.js"

import Usuario from "../models/usuario.js"
class usuarioController {
    static rotas(app){
        // Rota para o recurso usuario
        app.get('/', usuarioController.listar)
        app.get('/email/:email',usuarioController.buscarPorEmail)
        app.post('/', usuarioController.inserir)
        app.delete('/email/:email',usuarioController.deletar)
        app.put('/email/:email',usuarioController.atualizarUsuario)
    }

    static listar(req, res){
        const usuario = new Usuario ('nome', 'email', 'senha')
        res.send('Rota ativada com GET e recurso usuario: lista de usuarios deve ser retornada')
     
     //console log do objeto do usuario
    console.log(usuario)
}
    static inserir(req, res){
        res.send('Rota ativada com POST e recurso usuario: usuario deve ser inserido')
        // Console log do corpo da requisição
        console.log(req.body)        
    }
    static buscarPorEmail(req, res){
        // Busca o Email na lista de usuarios
        const usuario = bdUsuarios.find(usuario.email === req.params.email)
        // Se o usuario nao for encontrado, devolver o erro
        if( usuario){
            res.status(404).send('Usuario não encontrado')
        }
        // Se o usuario for encontrado, devolver o usuario
        res.send(usuario)
    }
    static atualizar(req, res){
        // Buscar email na lista de usuarios
        const usuario = bdUsuarios.find(usuario => usuario.email === req.params.email)
        //Se o usuario nao for encontrado, devolver o erro
        if(!usuario){
            res.status(404).send('Usuario nao encontrado')
        }
        //Se o usuario nao for encontrado, atualizar o usuario
        usuario.nome =(req.body.nome || usuario.nome)
        usuario.email =(req.body.email || usuario.email)
        usuario.senha =(req.body.senha || usuario.senha)
        //devolve o usuario atualizado
        res.send({mensagem: 'Usuario alterado com sucesso'})

    }
}


export default usuarioController