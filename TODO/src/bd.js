import Usuario from '.models/usuario.js'
import Tarefa from ".models/tarefa.js"

//Cria varios objetos e os adiciona a um array para simular uma listga de objetos
const bdUsuarios = []
const bdTarefas = []

//Criar um objeto do tipo Usuario e adciona a lista de usuarios
const usuario = new Usuario('Gervasio', 'gege@gmail.com', 'g123456')
bdUsuarios.push(usuario)

//Criar um objeto do tipo Usuario e adciona a lista de usuarios
const usuario2 = new Usuario('Bart', 'Bart@gmail.com', 'b123')
bdUsuarios.push(usuario2)

//Criar um objeto do tipo Tarefa e adciona a lista de Tarefas
const tarefa = new Tarefa('Modelar BD', 'Modelar Bd Projeto A', 'A fazer', new Date())
bdTarefas.push(tarefa)

//Criar um objeto do tipo Tarefa e adciona a lista de Tarefas
const tarefa2 = new Tarefa('Criar Bd', 'Criar Bd Projeto B', 'A fazer', new Date())
bdTarefas.psuh(tarefa2)

//Exporta as listas de objetos
export {bdUsuarios, bdTarefas}  