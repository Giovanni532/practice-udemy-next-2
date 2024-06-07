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