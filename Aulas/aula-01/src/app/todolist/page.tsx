// // rota: http://localhost:3000/todolist  -> leva em consideração o nome do arquivo e o nome da pasta.
// Utilizando o AppRouter utiliza o metodo fetch nativo do react.
// -> Importante: o console.log não aparece no navegador, mas sim no terminal onde está rodando a aplicação

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

async function getData(): Promise<TodoType[]> {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  // if (!res.ok) {
  //   // This will activate the closest `error.js` Error Boundary
  //   throw new Error("Failed to fetch data");
  // }
  return res.json();
}

export default async function TodoList() {
  const data = await getData();
  // console.log(data);
  return (
    <>
      <h2>Tarefas para fazer:</h2>
      <ul>
        {data.map((tarefa) => (
          <li key={tarefa.id}>
            <p>{tarefa.id}</p>
            <p>{tarefa.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
