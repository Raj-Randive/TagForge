import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import routes from "./routes/routes.js";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", routes);

app.listen("8000", () => {
  console.log("Server is running on port 8000");
});

// Handle the "video-url" end point
