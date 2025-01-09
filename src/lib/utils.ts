import { getCollection, type CollectionKey } from "astro:content";

type CollectionSortKey = "id" | "filePath"

export async function getCollectionSorted(collectionName: CollectionKey, sortKey: CollectionSortKey = "filePath") {
    const collection = await getCollection(collectionName);

    collection.sort((a, b) => (b[sortKey] || "").localeCompare(a[sortKey] || ""))
    return collection
}
