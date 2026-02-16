import express, { Request, Response } from "express";
import {
  getAllEvents,
  getEventByCategory,
  getEventById,
  addEvent,
} from "./services/EventService";
import type Event from "./models/Event";

const app = express();
app.use(express.json());
const port = 3000;

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/events", (req, res) => {
  if (req.query.category) {
    const category = req.query.category as string;
    getEventByCategory(category).then((events: Event[]) => {
      res.json(events);
    });
  } else {
    getAllEvents().then((events: Event[]) => {
      res.send(events);
    });
  }
});

app.get("/events/:id", (req, res) => {
  const id = parseInt(req.params.id);
  getEventById(id).then((event: Event | undefined) => {
    if (event) {
      res.json(event);
    } else {
      res.status(404).send("Event not found");
    }
  });
});

app.post("/events", (req, res) => {
  const newEvent: Event = req.body;
  addEvent(newEvent).then((event: Event) => {
    res.json(event);
  });
});
