import { useState } from "react";

function App() {
  const [tarefas, setTarefas] = useState([
    { id: 1, text: "Aprender Hooks" }
  ]);

  const [novaTarefa, setNovaTarefa] = useState("");

  const adicionarTarefa = (e) => {
    e.preventDefault();

    if (!novaTarefa.trim()) return;

    const tarefa = {
      id: Date.now(),
      text: novaTarefa
    };

    setTarefas([...tarefas, tarefa]);
    setNovaTarefa("");
  };

  const removerTarefa = (id) => {
    const novasTarefas = tarefas.filter(
        (tarefa) => tarefa.id !== id
    );

    setTarefas(novasTarefas);
  };

  return (
      <div>
        <h1>Lista de Tarefas</h1>

        <form onSubmit={adicionarTarefa}>
          <input
              type="text"
              placeholder="Digite uma tarefa"
              value={novaTarefa}
              onChange={(e) => setNovaTarefa(e.target.value)}
          />

          <button type="submit">
            Adicionar
          </button>
        </form>

        <ul>
          {tarefas.map((tarefa) => (
              <li key={tarefa.id}>
                {tarefa.text}

                <button
                    onClick={() => removerTarefa(tarefa.id)}
                >
                  Remover
                </button>
              </li>
          ))}
        </ul>
      </div>
  );
}

export default App;