import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PostCard({post}) {
  return (
    <div className="p-5 mb-10 bg-zinc-100 dark:bg-zinc-700 rounded">
      <h1 className="font-bold text-2xl mb-2">{post.title}</h1>
        <p className="my-3">{post.body}</p>
        <div className="flex justify-between items-center">
          <div className="flex">{post.date}</div>
            <Button asChild>
              <Link
                href={`/blog/${post.id}`}
                // className="text-white font-semibold bg-blue-600 hover:bg-blue-800 p-2 my-1 rounded"
              >
                  Read More...
              </Link>
            </Button>
        </div>
    </div>
    );
  };