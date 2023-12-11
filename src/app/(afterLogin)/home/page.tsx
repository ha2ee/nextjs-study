import Tab from "./_component/Tab";
import TapProvider from "./_component/TabProvider";
import style from "./home.module.css";

export default function Home(): JSX.Element {
  return (
    <main className={style.main}>
      <TapProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TapProvider>
    </main>
  );
}
