import { fetchSnippet } from '@/app/action/action';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

interface SnippetDetail {
    params: {
        id: string
    }
};

export default async function SnippetDetail(props: SnippetDetail) {
    const snippet = await fetchSnippet(parseInt(props.params.id));

    if (!snippet) {
        return notFound();
    }

    return (
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
            <h2 className="text-3xl font-bold mb-4 text-gray-800">Détails du Snippet</h2>
            <h3 className="text-2xl font-semibold mb-4 text-blue-600">{snippet?.title}</h3>
            <p className="bg-gray-200 p-4 rounded-lg text-gray-800 whitespace-pre-line mb-6">{snippet?.code}</p>
            <div className="flex gap-4">
                <Link className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-yellow-600 transition" href={`/snippets/${snippet.id}/edit`}>
                    Modifier
                </Link>
                <button
                    className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-600 transition"
                >
                    Supprimer
                </button>
            </div>
        </div>
    );
}
