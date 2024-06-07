"use client"

import type { Snippet } from '@prisma/client'
import React, { useState } from 'react'
import { Editor } from '@monaco-editor/react'
import { editSnippet } from '@/app/action/action'

interface SnippetEditForm {
    snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditForm) {
    const [code, setCode] = useState(snippet.code);

    const handleEditorChange = (value: string = "") => {
        setCode(value)
    };

    //Serveur actions dans un composant client
    const editSnippetAction = editSnippet.bind(null, snippet.id, code);

    return (
        <div>
            <Editor
                height="40vh"
                width="60vh"
                theme='vs-dark'
                language='javascript'
                defaultValue={snippet.code}
                options={{ minimap: { enabled: false } }}
                onChange={handleEditorChange}
            />
            <form action={editSnippetAction}>
                <button type='submit' className='p-2 border rounded'>
                    Save
                </button>
            </form>
        </div>
    )
}
