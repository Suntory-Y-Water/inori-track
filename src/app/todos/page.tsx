import Top from '@/app/components/Top/Top';

type Todo = {
  title: string;
};
const getData = async () => {
  const res = await fetch('http://localhost:3000/api/todos');
  return res.json();
};

export default async function Page() {
  const todos: Todo[] = await getData();
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <>
        <h1>Todos</h1>
        {todos.map((todo) => (
          <div>{todo.title}</div>
        ))}
        <Top />
      </>
    </main>
  );
}
