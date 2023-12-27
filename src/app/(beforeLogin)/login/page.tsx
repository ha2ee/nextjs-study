"use client";

import { useRouter } from "next/navigation";
import Main from "../_component/Main";
import { useSession } from "next-auth/react";

export default function Login() {
  const router = useRouter();
  const { data: session } = useSession();
  if (session) {
    router.replace("/home");
    return null;
  }
  router.replace("/i/flow/login");
  return <Main />;
}

//push replcae
// localhost:3000 localhost:3000/login -> localhost:3000/i/flow/login
// 뒤로가기는 전으로 가는데

//replace는
// localhost:3000 -> localhost:3000/login -> localhost:3000/i/flow/login
//뒤로 가기를 누르면 :3000으로 간다. replace해서 히스토리를 날리는것
