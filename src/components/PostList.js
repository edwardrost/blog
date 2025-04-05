'use client';

import { Suspense } from "react";
import Link from "next/link";
import PostCard from "@/components/PostCard";
import { useBoundStore } from "@/store/bound-store";

export default function PostList({ posts }) {
  const { searchText, searchMode } = useBoundStore();

  const filteredPosts = posts.filter(post => {
    const searchLower = searchText.toLowerCase();
    if (searchMode === 'byTitle') {
      return post.title.toLowerCase().includes(searchLower);
    } else {
      return post.body.toLowerCase().includes(searchLower);
    }
  });

  return (
    <section className="flex-grow">
      <div className="max-w-4xl mx-auto px-4 md:px-16">
        <div className="overflow-y-auto">
          <div className="space-y-6 pb-8">
            <Suspense
              fallback={
                <div className="flex items-center">
                  {/* <BlogCardSkeleton />
                  <BlogCardSkeleton />
                  <BlogCardSkeleton /> */}
                </div>
              }
            >
              {filteredPosts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
              <div className="flex justify-center mt-8">
                <Link href={"/blog"}>
                  {/* <Button>Read More...</Button> */}
                </Link>
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
} 