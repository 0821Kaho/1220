import { Post, User } from "@prisma/client";

export type PostWithAuthor = Post & {
  author: Pick<User, "name" | "image">;
};

export async function fetchPosts(): Promise<PostWithAuthor[]> {
  const response = await fetch("/api/posts");
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return response.json();
}