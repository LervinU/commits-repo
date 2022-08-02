import express from "express";
import { router } from "./routes/commit.route.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(cors());
app.use(express.json());

//Routes
app.use("/", router);

app.listen(PORT, () => {
    console.log(`Server on port ${PORT}`)
});