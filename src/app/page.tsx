import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h6>Hello from the root page</h6>
      <Link href={"/dashboard"}>Dashboard</Link>
    </div>
  );
}
