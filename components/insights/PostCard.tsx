"use client";

import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import type { PostWithAuthor } from "@/lib/api";

interface PostCardProps {
  post: PostWithAuthor;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link href={`/insights/${post.id}`} className="group">
      <article className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="relative aspect-[16/9]">
          <Image
            src={post.image || "/images/placeholder.jpg"}
            alt={post.title}
            fill
            className="object-cover transition-transform group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-bold mb-2 group-hover:text-blue-600">
            {post.title}
          </h2>
          <p className="text-neutral-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center text-sm text-neutral-500">
            <div className="relative w-8 h-8 rounded-full overflow-hidden mr-3">
              <Image
                src={post.author.image || "/images/avatar-placeholder.jpg"}
                alt={post.author.name || "Author"}
                fill
                className="object-cover"
              />
            </div>
            <span>{post.author.name}</span>
            <span className="mx-2">·</span>
            <time>{format(new Date(post.createdAt), "MMM d, yyyy")}</time>
          </div>
        </div>
      </article>
    </Link>
  );
}