import Layout from "@/components/Layout";
import First from "@/components/Pages/First";
import Second from "@/components/Pages/Second";
import Third from "@/components/Pages/Third";
import Forth from "@/components/Pages/Forth";

export default function Home() {
  return (
    <main>
      <Layout>
        <First />
        <Second />
        <Third />
        <Forth />
      </Layout>
    </main>
  );
}
