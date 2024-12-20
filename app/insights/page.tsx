"use client";

import { useEffect, useState } from "react";
import { Navigation } from "@/components/Navigation";
import { PostGrid } from "@/components/insights/PostGrid";
import { fetchPosts } from "@/lib/api";
import type { PostWithAuthor } from "@/lib/api";

export default function InsightsPage() {
  const [posts, setPosts] = useState<PostWithAuthor[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchPosts()
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 py-24">
        <h1 className="text-4xl font-bold mb-12">Educational Insights</h1>
        {isLoading ? (
          <div className="text-center py-12">Loading...</div>
        ) : error ? (
          <div className="text-center py-12 text-red-600">{error}</div>
        ) : posts.length === 0 ? (
          <div className="text-center py-12 text-neutral-600">
            No posts available yet.
          </div>
        ) : (
          <PostGrid posts={posts} />
        )}
      </div>
    </main>
  );
}