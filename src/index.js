import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import employeeRoute from "../routes/employee.js"

import dotenv from "dotenv";
dotenv.config();


const app = express();
const PORT = process.env.PORT || 5000;


const corsOptions = {  origin: process.env.CORS_ORIGIN || "http://localhost:3000",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(bodyParser.json());




app.use("/api/employee", employeeRoute)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// Uncomment the following lines to connect to the database and use routes
// import { connectDB } from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";

// Uncomment the following lines to connect to the database and use routes
// import { connectDB } from "./config/db.js";
// import userRoutes from "./routes/userRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";


