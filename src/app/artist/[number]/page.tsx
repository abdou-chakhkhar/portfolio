import { Suspense } from "react";

async function getTodo(number: string) {
  const res = await fetch(`https://dummyjson.com/todos/${number}`);
  return res.json();
}

async function getTodos() {
  const res = await fetch(`https://dummyjson.com/todos`);
  return res.json();
}

export default async function Page({
  params: { number },
}: {
  params: { number: string };
}) {
  console.log("===========", number);

  // Initiate both requests in parallel
  const oneTodo = getTodo(number);
  const todos = getTodos();

  // Wait for the promises to resolve
  const [OneTodo, AllTodos] = await Promise.all([oneTodo, todos]);

  console.log(OneTodo);
  console.log(AllTodos);

  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        {JSON.stringify(AllTodos)}
      </Suspense>
    </>
  );
}
