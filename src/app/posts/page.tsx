import { connection } from "next/server";
import os from "os";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default async function Posts() {
  await connection();
  const hostname = os.hostname();

  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts: Post[] = await res.json();

  return (
    <div className="flex flex-1 flex-col items-center px-6 py-12">
      <h1 className="mb-2 text-3xl font-bold">Posts</h1>
      <p className="mb-6 text-sm text-zinc-500">Served by: {hostname}</p>
      <ul className="w-full max-w-2xl space-y-4">
        {posts.map((post) => (
          <li
            key={post.id}
            className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800"
          >
            <h2 className="mb-1 font-semibold">{post.title}</h2>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {post.body}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
