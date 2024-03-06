import Layout from "@/components/Layout";
import First from "@/components/Pages/First";
import Second from "@/components/Pages/Second";
import Third from "@/components/Pages/Third";
import Forth from "@/components/Pages/Forth";
import Fifth from "@/components/Pages/Fifth";

export default function Home() {
  return (
    <main>
      <Layout>
        <First />
        <Second />
        <Third />
        <Forth />
        <Fifth />
      </Layout>
    </main>
  );
}
