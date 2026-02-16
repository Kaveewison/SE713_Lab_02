import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to SE713 Lab 02!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get('/test', (req: Request, res: Response) => {
    const id = req.query.id;   
    const output = `id: ${id}`;
    res.send(output);
  })

app.get("/test", (req, res) => {
  let returnObj = {
    name: "test",
    age: 20,
    address: "Thai",
  };
  res.send(returnObj);
});


