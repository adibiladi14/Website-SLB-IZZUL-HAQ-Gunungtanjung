// controllers/eventsController.js
import { Event } from '../models';

export async function getEvents(req, res) {
  try {
    const events = await Event.findAll();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function createEvent(req, res) {
  try {
    const event = await Event.create(req.body);
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function updateEvent(req, res) {
  try {
    const event = await Event.update(req.body, { where: { id: req.params.id } });
    res.json(event);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function deleteEvent(req, res) {
  try {
    await Event.destroy({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
