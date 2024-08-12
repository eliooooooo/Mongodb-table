import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { MongoClient, ServerApiVersion } from 'mongodb';

let db_user = import.meta.env.DB_USER;
let db_password = import.meta.env.DB_PASSWORD;

createApp(App).mount('#app')

const uri = `mongodb+srv://${db_user}:${db_password}@mongotable.rbtmi.mongodb.net/?retryWrites=true&w=majority&appName=MongoTable`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
