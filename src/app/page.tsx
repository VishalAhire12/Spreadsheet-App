// app/page.tsx
import Spreadsheet from './component/spreedsheet';

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Spreadsheet Clone</h1>
      <Spreadsheet />
    </main>
  );
}
