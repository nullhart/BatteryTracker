<template>
  <div>
    <!-- <label for="cars">Choose a car:</label> -->
    <button @click="save">Save</button>
    <button @click="completedForms">Get FOrms</button>

    <button @click="wipeDB()">Delete DB</button>
    <ul v-for="(form,i) in Completed" :key="i">
      <li>
        {{form.title}}
        <span>{{form.fields.bat1voltage}}</span>
      </li>
    </ul>
    <!-- <select class="input" name="cars" id="cars">
      <option value="volvo">Volvo</option>
      <option value="saab">Saab</option>
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </select>-->
  </div>
</template>

<script>
import { openDB, deleteDB, wrap, unwrap } from "idb";
export default {
  data() {
    return {
      Completed: {}
    };
  },
  methods: {
    wipeDB: async function() {
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
    },
    completedForms: async function() {
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
      console.log(SavedForms);
      this.Completed = SavedForms;
      db.close();
    },

    save: async function() {
      console.log("save");
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

      const tx = await db.transaction("CompletedForms", "readwrite");

      await tx.db.add("CompletedForms", {
        title: "Battery Form",
        date: new Date(),
        fields: {
          bat1voltage: 2
        }
      });
      db.close();
    }
  },
  async mounted() {}
};
</script>

<style lang="scss">
:root {
  --white: #f8f8f8;
  --blue: #118ab2;
  --green: #06d6a0;
  --midnight: #073b4c;
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  background: pink;
}
body {
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
}
ul {
  margin: 4;
  padding: 0;
  list-style-type: none;
  // border: 2px solid var(--midnight);
  border-radius: 10px;
  width: 400px;
  min-width: 300px;
  background: var(--white);
  // box-shadow: 5px 5px 30px -5px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  & li {
    height: 2rem;
    padding: 0.4rem 0.7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 4px solid pink;
    transition: 75ms ease-in;
    &:first-child {
      border-top: none;
    }
    & span {
      border-radius: 50px;
      background: var(--green);
      padding: 0.4rem;
    }
    &:hover {
      background: var(--midnight);
      color: var(--white);
      cursor: pointer;

      & span {
        background: var(--blue);
      }
    }
  }
}
</style>