"use server"

import { promises } from "fs"
import { IPalmSpecie } from "@/typings"

export async function fetchPalmTrees() {
    let data = await promises.readFile('public/palmtrees.json', 'utf8')
    const trees: IPalmSpecie[] = JSON.parse(data)
    return trees
}