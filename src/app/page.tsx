import { fetchSnippets } from "./action/action";

export default async function Home() {
  const snippets = await fetchSnippets();

  const renderSnippet = snippets.map(snippet => {
    return (
      <div key={snippet.id}>
        Titre du snippet : {snippet.title}
      </div>
    )
  })

  return (
    <div>
      <h1>Home page</h1>
      <div>
        {renderSnippet}
      </div>
    </div>
  );
}
