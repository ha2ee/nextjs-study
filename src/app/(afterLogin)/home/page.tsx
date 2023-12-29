import PostForm from "@/app/(afterLogin)/home/_component/PostForm";
import Tab from "@/app/(afterLogin)/home/_component/Tab";
import TabDeciderSuspense from "@/app/(afterLogin)/home/_component/TabDeciderSuspense";
import TabProvider from "@/app/(afterLogin)/home/_component/TabProvider";
import Loading from "@/app/(afterLogin)/home/loading";
import { auth } from "@/auth";
import { QueryClient } from "@tanstack/react-query";
import { Suspense } from "react";
import { getPostRecommends } from "./_lib/getPostRecommends";
import style from "./home.module.css";

export default async function Home() {
  const session = await auth();
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts", "recommends"],
    queryFn: getPostRecommends,
    initialPageParam: 0,
  });

  return (
    <main className={style.main}>
      <TabProvider>
        <Tab />
        <PostForm me={session} />
        <Suspense fallback={<Loading />}>
          <TabDeciderSuspense />
        </Suspense>
      </TabProvider>
    </main>
  );
}
