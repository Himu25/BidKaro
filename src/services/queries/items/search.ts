import { itemIndexKey } from "$services/keys";
import { client } from "$services/redis";
import { deserialize } from "./deserialize";

export const searchItems = async (term: string, size: number = 5) => {
    const cleaned = term
        .replaceAll(/[^a-zA-Z0-9 ]/g, '')
        .trim()
        .split(" ")
        .map((word) => {
            return word ? `%${word}%` : '';
        })
        .join(' ')
    if (cleaned.trim() === "") {
        return [];
    }
    const query = `(@name:(${cleaned})=> {$weight: 5.0}) | (@description:(${cleaned}))`
    const results = await client.ft.search(itemIndexKey(), query, {
        LIMIT: {
            from: 0,
            size,
        },
    })
    return results.documents.map(({id,value}) => {
       return deserialize(id,value as any)
    })
    
};
