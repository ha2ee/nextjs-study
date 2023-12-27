"use client";

import { User } from "next-auth";
import { getFollowRecommends } from "../_lib/getFollowRecommends";
import FollowRecommend from "./FollowRecommend";
import { useQuery } from "@tanstack/react-query";

export default function FollowRecommendSection() {
  const { data } = useQuery<User[]>({
    queryKey: ["users", "followRecommends"],
    queryFn: getFollowRecommends,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return data?.map((user) => <FollowRecommend user={user} key={user.id} />);
}
