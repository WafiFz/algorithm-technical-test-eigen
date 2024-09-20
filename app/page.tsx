import { AlgorithmSection } from './components/AlgorithmSection'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-4xl font-bold mb-8">Algorithm Showcase</h1>
      <AlgorithmSection />
    </main>
  )
}
