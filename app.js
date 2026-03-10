import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(__dirname));

app.get("/api/game", (req, res) => {
    res.json({
        gameName: "Spongebob v Doodlebob",
        gameURL: "https://github.com/a-nunley/dev-david",
        gameAuthor: "Alexander Nunley"
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});