// controllers/attendanceController.js
import { Attendance } from '../models';

export async function getAttendances(req, res) {
  try {
    const attendances = await Attendance.findAll();
    res.json(attendances);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function createAttendance(req, res) {
  try {
    const attendance = await Attendance.create(req.body);
    res.status(201).json(attendance);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function updateAttendance(req, res) {
  try {
    const attendance = await Attendance.update(req.body, { where: { id: req.params.id } });
    res.json(attendance);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function deleteAttendance(req, res) {
  try {
    await Attendance.destroy({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
