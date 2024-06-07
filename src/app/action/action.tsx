"use server"

import { db } from "@/db"
import { redirect } from "next/navigation";

// Création de la fonction de creation de snippet
export async function createSnippet(formData: FormData) {
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    await db.snippet.create({
        data: {
            title,
            code
        }
    });

    redirect("/")
}

// Création de la fonction de récupération des snippets
export async function fetchSnippets() {
    return await db.snippet.findMany();
}

// Création de la fonction de récupération d'un snippet
export async function fetchSnippet(id: number) {
    // Permet un effet de loading lors de la recherche par id
    await new Promise((r) => setTimeout(r, 1000));
    return await db.snippet.findFirst({ where: { id } });
}

// Modification d'un snippet
export async function editSnippet(id: number, code: string) {
    await db.snippet.update({
        where: { id },
        data: { code }
    });

    redirect(`/snippets/${id}`)
}

// Suppresion d'un snippet
export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: { id },
    });

    redirect(`/`)
}