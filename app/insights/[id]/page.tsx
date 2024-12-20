"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Navigation } from "@/components/Navigation";
import ReactMarkdown from "react-markdown";
import { format } from "date-fns";
import Image from "next/image";
import type { PostWithAuthor } from "@/lib/api";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState<PostWithAuthor | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPost(data);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <article className="max-w-4xl mx-auto px-4 py-24">
        {post.image && (
          <div className="relative aspect-[2/1] mb-8 rounded-lg overflow-hidden">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <h1 className="text-4xl font-bold mb-6">{post.title}</h1>
        <div className="flex items-center mb-8 text-neutral-600">
          <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
            <Image
              src={post.author.image || "/images/avatar-placeholder.jpg"}
              alt={post.author.name || "Author"}
              fill
              className="object-cover"
            />
          </div>
          <div>
            <div className="font-medium">{post.author.name}</div>
            <time className="text-sm">
              {format(new Date(post.createdAt), "MMMM d, yyyy")}
            </time>
          </div>
        </div>
        <div className="prose max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </article>
    </main>
  );
}