import { fetchSnippet } from '@/app/action/action';
import SnippetEditForm from '@/components/SnippetEditForm';
import { notFound } from 'next/navigation';
import React from 'react'

interface SnippetEdit {
    params: {
        id: string
    }
};

export default async function EditSnippetPage(props: SnippetEdit) {
    const id = parseInt(props.params.id);
    const snippet = await fetchSnippet(id);

    if (!snippet) {
        return notFound();
    }

    return (
        <div>
            <SnippetEditForm snippet={snippet} />
        </div>
    )
}
