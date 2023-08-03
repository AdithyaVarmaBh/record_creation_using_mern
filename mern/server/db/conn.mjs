import { MongoClient } from "mongodb";

const connectionString = process.env.ALTAS_URI || "mongodb+srv://durgaadithyavarmabh:ztOtxxxBLveSsQVM@cluster0.aidwdzz.mongodb.net/";
const client = new MongoClient(connectionString);

let conn;

try{
    conn = await client.connect();
}catch(e){
    console.error(e);
}

let db = conn.db("Employee");

export default db;