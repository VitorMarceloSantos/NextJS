import type { InferGetStaticPropsType, GetStaticProps } from "next";
import Link from "next/link";

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
      <h2>Lista de Posts:</h2>
      <ul>
        {todo.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
