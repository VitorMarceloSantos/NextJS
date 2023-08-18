// Utilizando o getStaticProps para realizar um fetch na API
// rota: http://localhost:3000/todolist  -> leva em consideração o nome do arquivo e o nome da pasta.
// getStaticProps sempre roda no servidor e nunca no cliente.
// getStaticPropssempre corre durante next build
// Deve usar a exportação getStaticPropscomo uma função autônoma — ela não funcionará se você adicionar getStaticPropscomo uma propriedade do componente da página.

import type { InferGetStaticPropsType, GetStaticProps } from "next";

type TodoType = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export const getStaticProps: GetStaticProps<{
  todo: TodoType[];
}> = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todo = await res.json();
  return { props: { todo } };
};

export default function TodoList({
  todo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <h2>Tarefas para fazer:</h2>
      <ul>
        {todo.map((tarefa) => (
          <li key={tarefa.id}>
            <p>{tarefa.id}</p>
            <p>{tarefa.title}</p>
          </li>
        ))}
      </ul>
    </>
  );
}
