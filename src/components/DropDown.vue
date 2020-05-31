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
import GetCreatedForms from "../Helpers/GetCreatedForms";
import WipeLocalDB from "../Helpers/WipeLocalDB";

export default {
  data() {
    return {
      Completed: {}
    };
  },
  methods: {
    wipeDB: async function() {
      await WipeLocalDB();
    },
    completedForms: async function() {
      this.Completed = await GetCreatedForms();
    },
    save: async function() {
      console.log("save");
      // let location = await this.getPosition();
      // console.log(location);
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
</style>