import pg from "pg";
import env from "dotenv";

env.config();

const requiredEnvVars =["PG_USER", "PG_HOST", "PG_DATABASE", "PG_PORT", "PG_PASSWORD"]

requiredEnvVars.forEach((varName)=>{
    if(!process.env[varName]){
        console.log(`missing required variables : ${varName} `)
        process.exit(1);
    }
})

const db = new pg.Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    port: process.env.PG_PORT,
    password: process.env.PG_PASSWORD
})

db.connect().then(()=> console.log('Connected with database')).catch((err)=>{
    console.log("coundnt connect with the databse",err);
    process.exit(1);
});

db.on("error", (err)=>{
    console.log("Database error:", err);
    process.exit(1);
});

export const query =(text, params)=>db.query(text,params);