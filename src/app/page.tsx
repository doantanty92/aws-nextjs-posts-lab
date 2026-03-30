import { connection } from "next/server";
import os from "os";

export default async function Home() {
  await connection();
  const hostname = os.hostname();

  return (
    <div className="flex flex-1 flex-col items-center justify-center px-6 py-12">
      <h1 className="mb-4 text-3xl font-bold">Welcome to Next.js Posts Lab</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        A simple app deployed on AWS behind an Application Load Balancer.
      </p>
      <p className="mt-4 text-sm text-zinc-500">Served by: {hostname}</p>
    </div>
  );
}
