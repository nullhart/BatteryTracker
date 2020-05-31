import { deleteDB } from "idb";
export default async function () {
    await deleteDB("FormsDatabase", {
        blocked(e) {
            console.log("blocked Deletion " + e);
            // …
        },
        blocking() {
            console.log("blocking");
            // …
        },
        terminated() {
            // …
            console.log("Terminated");
        }
    });

    console.log("Local DB Deleted");
}