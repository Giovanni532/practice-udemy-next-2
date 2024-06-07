"use client"

import type { Snippet } from '@prisma/client'
import React, { useState } from 'react'
import { Editor } from '@monaco-editor/react'

interface SnippetEditForm {
    snippet: Snippet
}

export default function SnippetEditForm({ snippet }: SnippetEditForm) {
    const [code, setCode] = useState(snippet.code)
    const handleEditorChange = (value: string = "") => {
        setCode(value)
    }

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
        </div>
    )
}
