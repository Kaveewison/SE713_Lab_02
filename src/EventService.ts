import type Event from "../models/Event";

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
export function getEventByCategory(category: string): Event[] {
  const filteredEvents = events.filter((event) => event.category === category);
  return filteredEvents;
}

export function getAllEvents(): Event[] {
  return events;
}

export function getEventById(id: number): Event | undefined {
  return events.find((event) => event.id === id);
}

export function addEvent(newEvent: Event): Event {
  newEvent.id = events.length + 1;
  events.push(newEvent);
  return newEvent;
}
