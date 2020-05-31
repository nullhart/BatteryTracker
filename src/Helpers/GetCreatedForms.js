import { openDB } from "idb";
export default async function () {
    const db = await openDB("FormsDatabase", 1, {
        async upgrade(db) {
            // Create a store of objects
            const store = await db.createObjectStore("CompletedForms", {
                // The 'id' property of the object will be the key.
                keyPath: "id",
                // If it isn't explicitly set, create a value by auto incrementing.
                autoIncrement: true
            });
            // Create an index on the 'date' property of the objects.
            store.createIndex("date", "date");
        },
        blocked() {
            // …
        },
        blocking() {
            // …
        },
        terminated() {
            // …
        }
    });
    const tx = await db.transaction("CompletedForms", "readonly");
    const SavedForms = await tx.db.getAll("CompletedForms");
    db.close();
    return SavedForms

}