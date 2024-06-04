// controllers/teachersController.js
import { Teacher } from '../models';

export async function getTeachers(req, res) {
  try {
    const teachers = await Teacher.findAll();
    res.json(teachers);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function createTeacher(req, res) {
  try {
    const teacher = await Teacher.create(req.body);
    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function updateTeacher(req, res) {
  try {
    const teacher = await Teacher.update(req.body, { where: { id: req.params.id } });
    res.json(teacher);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function deleteTeacher(req, res) {
  try {
    await Teacher.destroy({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
