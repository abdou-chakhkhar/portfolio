import { Inter } from "next/font/google";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>dashboard layout</h1>
      {children}
    </div>
  );
}
