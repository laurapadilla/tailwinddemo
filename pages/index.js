import Head from "next/head";
import { Header } from "../components/Header";
import { Hero } from "./Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
}
