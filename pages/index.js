import Head from "next/head";
import Header from "../components/header";
import Sidebar from "../components/sideBar";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Teknix</title>
        <meta name="description" content="Teknix" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="flex flex-wrap">
        <Sidebar />
        <main className="flex-1">
          <p className="text-2xl text-center">content</p>
        </main>
        <footer></footer>
      </div>
    </>
  );
}
