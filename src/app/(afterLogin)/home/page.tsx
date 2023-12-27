import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import PostForm from "./_component/PostForm";
import Tab from "./_component/Tab";
import TapProvider from "./_component/TabProvider";
import style from "./home.module.css";
import { getPostRecommends } from "./_lib/getPostRecommends";
import { Suspense } from "react";
import TabDeciderSuspense from "./_component/TabDeciderSuspense";

export default async function Home(): Promise<JSX.Element> {
  return (
    <main className={style.main}>
      <TapProvider>
        <Tab />
        <PostForm />
        <Suspense>
          <TabDeciderSuspense />
        </Suspense>
      </TapProvider>
    </main>
  );
}
