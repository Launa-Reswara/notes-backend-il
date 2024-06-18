import { pool } from "../lib/utils/pool.js";

export async function getHome(_, res) {
  try {
    res.status(200).json({
      statusCode: 200,
      message: "Success!",
      author: "Launa Reswara",
      repository: "https://github.com/Launa-Reswara/notes-backend-il",
      endpoints: {
        "/api/v1/notes": "(GET) Get all available notes",
        "/api/v1/notes/:id": "(GET) Get note based on its id",
        "/api/v1/notes/add": "(POST) Add new note",
        "/api/v1/notes/edit/:id": "(PATCH) Edit note based on its id",
        "/api/v1/notes/delete/:id": "(DELETE) Delete note based on its id",
      },
    });
  } catch (err) {
    res.status(400).json({
      statusCode: 400,
      message: "Failed to get home API",
    });
  }
}

export async function getNotes(_, res) {
  try {
    const [results] = await pool.query(`SELECT * FROM notes`);

    if (results.length) {
      res.status(200).json({
        statusCode: 200,
        message: "Success get all notes!",
        data: results,
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        message: "No available notes!",
      });
    }
  } catch (err) {
    res
      .status(400)
      .json({ statusCode: 400, message: "Failed to get all notes!" });
  }
}

export async function getNoteById(req, res) {
  try {
    const { id } = req.params;

    const [results] = await pool.query(
      `SELECT * FROM notes WHERE id = '${id}'`
    );

    if (results.length) {
      res.status(200).json({
        statusCode: 200,
        message: "Success get note by id!",
        data: results,
      });
    } else {
      res.status(404).json({
        statusCode: 404,
        message: `The note with id = ${id} is not available!`,
      });
    }
  } catch (err) {
    res
      .status(400)
      .json({ statusCode: 400, message: "Failed to get note by id!" });
  }
}

export async function addNote(req, res) {
  try {
    const { title, datetime, note } = req.body;

    await pool.query(
      `INSERT INTO notes(title, datetime, note) VALUES('${title}', '${datetime}', '${note}')`
    );

    res.status(200).json({ statusCode: 200, message: "Success add new note!" });
  } catch (err) {
    res
      .status(400)
      .json({ statusCode: 400, message: "Failed to add new note!" });
  }
}

export async function editNote(req, res) {
  try {
    const { title, datetime, note } = req.body;
    const { id } = req.params;

    await pool.query(
      `UPDATE notes SET title = '${title}', datetime = '${datetime}', note = '${note}' WHERE id = '${id}'`
    );

    res.status(200).json({
      statusCode: 200,
      message: `Success edit note!`,
    });
  } catch (err) {
    res.status(200).json({ statusCode: 400, message: "Failed to edit note!" });
  }
}

export async function deleteNote(req, res) {
  try {
    const { id } = req.params;

    await pool.query(`DELETE FROM notes WHERE id = '${id}'`);

    res.status(200).json({
      statusCode: 200,
      message: "Success delete note!",
    });
  } catch (err) {
    res.status(400).json({
      statusCode: 400,
      message: "Failed to delete note!",
    });
  }
}
