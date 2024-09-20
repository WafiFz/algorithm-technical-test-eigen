import { Algorithm1Section } from "../components/Algorithm1Section";
import { Algorithm2Section } from "../components/Algorithm2Section";
import { Algorithm3Section } from "../components/Algorithm3Section";
import { Algorithm4Section } from "../components/Algorithm4Section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Algorithm Showcase</h1>
      <Algorithm1Section />
      <Algorithm2Section />
      <Algorithm3Section />
      <Algorithm4Section />
    </main>
  );
}
