import express from "express";
import { getSignedUrl } from "../controller/video-controller.js";

const routes = express.Router();

routes.get("/videos-url", getSignedUrl);

export default routes;
