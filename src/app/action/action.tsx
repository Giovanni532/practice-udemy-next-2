"use server"

import { db } from "@/db"
import { redirect } from "next/navigation";

// Création de la fonction de creation de snippet
export async function createSnippet(formData: FormData){
    const title = formData.get('title') as string;
    const code = formData.get('code') as string;

    const snippet = await db.snippet.create({
        data:{
            title,
            code
        }
    });

    console.log(snippet);

    redirect("/")
}