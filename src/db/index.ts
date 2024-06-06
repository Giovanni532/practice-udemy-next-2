import { PrismaClient } from "@prisma/client";

// consd db pour acceder a la bdd
export const db = new PrismaClient();