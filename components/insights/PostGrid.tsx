"use client";

import { PostCard } from "./PostCard";
import type { PostWithAuthor } from "@/lib/api";

interface PostGridProps {
  posts: PostWithAuthor[];
}

export function PostGrid({ posts }: PostGridProps) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}