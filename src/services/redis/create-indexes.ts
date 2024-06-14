import { itemIndexKey, itemsKey } from "$services/keys";
import { SchemaFieldTypes } from "redis";
import { client } from "./client";

export const createIndexes = async () => {
    const indexes = await client.ft._list();
    const exists = indexes.find((index) => {
         return index === itemIndexKey()
    })
    if (exists) {
        return
    }
        await client.ft.create(itemIndexKey(), {
            name: {
                type: SchemaFieldTypes.TEXT,
                SORTABLE: true,
            },
            description: {
                type: SchemaFieldTypes.TEXT
            },
            ownerId: {
                type: SchemaFieldTypes.TAG,
            },
            endingAt: {
                type: SchemaFieldTypes.NUMERIC,
                SORTABLE: true,
            },
            bids: {
                type: SchemaFieldTypes.NUMERIC,
                SORTABLE: true,
            },
            views: {
                type: SchemaFieldTypes.NUMERIC,
                SORTABLE: true,
            },
            price: {
                type: SchemaFieldTypes.NUMERIC,
                SORTABLE: true,
            },
            likes: {
                type: SchemaFieldTypes.NUMERIC,
                SORTABLE: true,
            },
        } as any, {
            ON: "HASH",
            PREFIX: itemsKey('') // it returns item#
        })
};
