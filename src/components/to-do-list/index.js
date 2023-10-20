import "./style.css"
import React, { useState } from 'react';


function TodoApp() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  const editarTarefa = (indice) => {
    const novaDescricao = prompt('Editar tarefa:', tarefas[indice]);
    if (novaDescricao !== null) {
      const novasTarefas = [...tarefas];
      novasTarefas[indice] = novaDescricao;
      setTarefas(novasTarefas);
    }
  };

  const excluirTarefa = (indice) => {
    const confirmar = window.confirm('Tem certeza de que deseja excluir esta tarefa?');
    if (confirmar) {
      const novasTarefas = tarefas.filter((_, i) => i !== indice);
      setTarefas(novasTarefas);
    }
  };
  

  return (
    <div className='container'>
      <div className="container-adc">
      <h1>Lista de Tarefas</h1>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={novaTarefa}
        onChange={(e) => setNovaTarefa(e.target.value)}
      />
      <button className='button-adc'onClick={adicionarTarefa}>Adicionar</button></div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li className="container-b" key={index}>
            {tarefa}
            <div className="button-selection">
            <button onClick={() => editarTarefa(index)}>Editar</button>
            <button onClick={() => excluirTarefa(index)}>Excluir</button></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;
