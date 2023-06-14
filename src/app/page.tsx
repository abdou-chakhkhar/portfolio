import Link from "next/link";
import Navbar from "./_components/navbar";

async function getData() {
  const res = await fetch("https://dummyjson.com/todos");
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();
  console.log(data);

  return (
    <div>
      <Navbar />
    </div>
  );
}
