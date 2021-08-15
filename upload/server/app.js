import express from "express";
import path from "path";

const app = express();
const port = 3000;

const __dirname = path.resolve();
app.use(express.static(__dirname + "/public"));

app.get('/converter', (req, res) => {
  res.send('Hello World!')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
