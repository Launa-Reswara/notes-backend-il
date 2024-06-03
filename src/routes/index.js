import express from "express";
import {
  addNote,
  deleteNote,
  editNote,
  getNotes,
} from "../controllers/notes.controller.js";

const routes = express.Router();

routes.get("/api/v1/notes", getNotes);

routes.post("/api/v1/notes", addNote);

routes.patch("/api/v1/notes/edit/:id", editNote);

routes.delete("/api/v1/notes/delete/:id", deleteNote);

export default routes;
