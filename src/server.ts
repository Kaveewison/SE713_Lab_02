import express, { Request, Response } from "express";
const app = express();
const port = 3000;

app.use(express.json());

interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
}

const events: Event[] = [
  {
    id: 1,
    category: "Music",
    title: "Concert",
    description: "A live concert",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 2,
    category: "Sports",
    title: "Football Match",
    description: "Premier League football game",
    location: "Manchester",
    date: "2021-08-15",
    time: "15:00",
    petsAllowed: false,
    organizer: "Premier League",
  },
  {
    id: 3,
    category: "Food",
    title: "Food Festival",
    description: "International food and wine festival",
    location: "Paris",
    date: "2021-09-20",
    time: "11:00",
    petsAllowed: true,
    organizer: "Culinary Events",
  },
  {
    id: 4,
    category: "Technology",
    title: "Tech Conference",
    description: "Annual technology and innovation summit",
    location: "San Francisco",
    date: "2021-10-05",
    time: "09:00",
    petsAllowed: false,
    organizer: "Tech Summit Inc",
  },
  {
    id: 5,
    category: "Art",
    title: "Art Exhibition",
    description: "Modern art gallery showcase",
    location: "New York",
    date: "2021-11-12",
    time: "10:00",
    petsAllowed: true,
    organizer: "Metropolitan Gallery",
  },
  {
    id: 6,
    category: "Education",
    title: "Science Workshop",
    description: "Interactive science workshop for students",
    location: "Tokyo",
    date: "2021-12-01",
    time: "14:00",
    petsAllowed: false,
    organizer: "Education Foundation",
  },

];


app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to SE713 Lab 02!");
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

app.get("/test", (req: Request, res: Response) => {
  const id = req.query.id;
  const output = `id: ${id}`;
  res.send(output);
});

app.get("/test", (req, res) => {
  let returnObj = {
    name: "test",
    age: 20,
    address: "Thai",
  };
  res.send(returnObj);
});

 app.get("/events", (req, res) => {
    if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = events.filter((event) => event.category === category);
    res.json(filteredEvents);
    } else {
    res.json(events);
    }
});

app.get("/events/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const event = events.find((event) => event.id === id);
    if (event) {
    res.json(event);
    } else {
    res.status(404).send("Event not found");
    }
});  


 app.post("/events", (req, res) => {
    const newEvent: Event = req.body;
    newEvent.id = events.length + 1;
    events.push(newEvent);
    res.json(newEvent);
});

