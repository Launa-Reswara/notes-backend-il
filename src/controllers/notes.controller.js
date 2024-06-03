import { pool } from "../lib/utils/pool.js";

export async function getNotes(_, res) {
  try {
    const [results] = await pool.query(`SELECT * FROM notes`);

    if (results.length) {
      res.send({
        statusCode: 200,
        message: "Success get all notes!",
        data: results,
      });
    } else {
      res.send({
        statusCode: 404,
        message: "No available notes!",
      });
    }
  } catch (err) {
    res.send({ statusCode: 400, message: "Failed to get all notes!" });
  }
}

// add
export async function addNote(req, res) {
  try {
    const { title, datetime, note } = req.body;

    await pool.query(
      `INSERT INTO notes(title, datetime, note) VALUES('${title}', '${datetime}', '${note}')`
    );

    res.send({ statusCode: 200, message: "Success add new note!" });
  } catch (err) {
    res.send({ statusCode: 400, message: "Failed to add new note!" });
  }
}

// edit
export async function editNote(req, res) {
  try {
    const { title, datetime, note } = req.body;
    const { id } = req.params;

    await pool.query(
      `UPDATE notes SET title = '${title}', datetime = '${datetime}', note = '${note}' WHERE id = '${id}'`
    );

    res.send({
      statusCode: 200,
      message: `Success edit note!`,
    });
  } catch (err) {
    res.send({ statusCode: 400, message: "Failed to edit note!" });
  }
}

// delete
export async function deleteNote(req, res) {
  try {
    const { id } = req.params;

    await pool.query(`DELETE FROM notes WHERE id = '${id}'`);

    res.send({
      statusCode: 200,
      message: "Success delete note!",
    });
  } catch (err) {
    res.send({
      statusCode: 400,
      message: "Failed to delete note!",
    });
  }
}
