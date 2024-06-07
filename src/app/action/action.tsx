"use server"

import { db } from "@/db"
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// Création de la fonction de creation de snippet
export async function createSnippet(formState: { message: string }, formData: FormData) {
    try {
        const title = formData.get('title');
        const code = formData.get('code');

        if (typeof title !== 'string' || title.length < 3) {
            return {
                message: "Le titre n'est pas assez long"
            }
        }

        if (typeof code !== 'string' || code.length < 10) {
            return {
                message: "Le code n'est pas assez long"
            }
        }

        await db.snippet.create({
            data: {
                title,
                code
            }
        });

    } catch (err: unknown) {
        if (err instanceof Error) {
            return {
                message: err.message
            }
        } else {
            return {
                message: 'Quelque chose a mal tourner ..'
            }
        }
    }
    revalidatePath("/")
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

    revalidatePath(`/snippets/${id}`)
    redirect(`/snippets/${id}`)
}

// Suppresion d'un snippet
export async function deleteSnippet(id: number) {
    await db.snippet.delete({
        where: { id },
    });

    revalidatePath("/")
    redirect(`/`)
}