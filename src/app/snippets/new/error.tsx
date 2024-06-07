'use client';

import React from 'react';

interface ErrorProps {
    error: Error,
    reset: () => void
}

export default function ErrorNewSnippet({ error }: ErrorProps) {
    return (
        <div>{error.message}</div>
    )
}
