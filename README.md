<div align="center">
  <h1>Notes Backend</h1>
  <p>A simple notes API with CRUD functionality</p>
</div>

## Documentation of API

| Route                    | Method | Description                 |
| ------------------------ | ------ | ----------------------------|
| /api/v1                  | GET    | Home API                    |
| /api/v1/notes            | GET    | Get all available notes     |
| /api/v1/notes/:id        | GET    | Get note based on its id    |
| /api/v1/notes/add        | POST   | Add new note                |
| /api/v1/notes/edit/:id   | PATCH  | Edit note based on its id   |
| /api/v1/notes/delete/:id | DELETE | Delete note based on its id |

## Screenshots

|                                                                      |                                                                      |
| :------------------------------------------------------------------: | :------------------------------------------------------------------: |
| ![pic 1](/docs/Screenshot%20from%202024-06-18%2020-40-43.png) | ![pic 2](/docs/Screenshot%20from%202024-06-18%2020-41-25.png) |
| ![pic 3](/docs/Screenshot%20from%202024-06-18%2020-41-43.png) | ![pic 4](/docs/Screenshot%20from%202024-06-18%2020-43-11.png) |
| ![pic 5](/docs/Screenshot%20from%202024-06-18%2020-43-36.png) |

## Getting Started

- Clone this repo.
- Install all dependencies with `npm install`.
- Run all SQL commands provided from `notes_db.sql`. You can find the file in `src/lib/utils/notes_db.sql`.
- Create a `.env` file. You can check the format in `.env.example` file.
- Type `npm run dev` in your terminal and see the result in `http://localhost:5000`.
