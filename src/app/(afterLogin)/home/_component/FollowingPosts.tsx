"use client";

import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import { getFollowingPosts } from "../_lib/getFollowingPosts";
import Post from "@/app/(afterLogin)/_component/Post";
import { Post as IPost } from "@/model/Post";
import styles from "@/app/(afterLogin)/home/home.module.css";

export default function FollowingPosts() {
  const { data } = useSuspenseQuery<IPost[]>({
    queryKey: ["posts", "followings"],
    queryFn: getFollowingPosts,
    staleTime: 60 * 1000,
    gcTime: 60 * 5 * 1000,
  });

  return data?.map((post) => <Post key={post.postId} post={post} />);
}
