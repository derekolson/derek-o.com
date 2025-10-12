import { getCollection, type CollectionKey, type CollectionEntry, type AnyEntryMap } from "astro:content";

type CollectionSortKey = "id" | "filePath"

export async function getCollectionSorted(collectionName: CollectionKey, sortKey: CollectionSortKey = "filePath") {
    const collection = await getCollection(collectionName);

    collection.sort((a, b) => (b[sortKey] || "").localeCompare(a[sortKey] || ""))
    return collection
}

export function getCollectionLink<C extends keyof AnyEntryMap>(item: CollectionEntry<C>): string {
    return `/${item.collection}/${item.id}/`
}
