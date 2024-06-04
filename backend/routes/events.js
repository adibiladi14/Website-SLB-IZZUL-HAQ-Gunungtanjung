// routes/events.js
import { Router } from 'express';
const router = Router();
import { getEvents, createEvent, updateEvent, deleteEvent } from '../controllers/eventsController';

router.get('/', getEvents);
router.post('/', createEvent);
router.put('/:id', updateEvent);
router.delete('/:id', deleteEvent);

export default router;
