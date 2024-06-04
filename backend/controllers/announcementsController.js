// controllers/announcementsController.js
import { Announcement } from '../models';

export async function getAnnouncements(req, res) {
  try {
    const announcements = await Announcement.findAll();
    res.json(announcements);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function createAnnouncement(req, res) {
  try {
    const announcement = await Announcement.create(req.body);
    res.status(201).json(announcement);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function updateAnnouncement(req, res) {
  try {
    const announcement = await Announcement.update(req.body, { where: { id: req.params.id } });
    res.json(announcement);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function deleteAnnouncement(req, res) {
  try {
    await Announcement.destroy({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
