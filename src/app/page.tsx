import Link from "next/link";
import { fetchSnippets } from "./action/action";

export default async function Home() {
  const snippets = await fetchSnippets();

  const renderSnippet = snippets.map(snippet => {
    return (
      <Link href={`/snippets/${snippet.id}`} key={snippet.id} className="block bg-white p-4 rounded-lg shadow hover:bg-gray-100 transition">
        <h3 className="text-lg font-semibold text-blue-600">Titre du snippet : {snippet.title}</h3>
      </Link>
    );
  });

  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Snippets</h1>
        <Link href={`/snippets/new`} className="inline-block bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600 transition">
          Ajouter un snippet
        </Link>
      </div>
      <div className="grid gap-4">
        {renderSnippet}
      </div>
    </div>
  );
}
