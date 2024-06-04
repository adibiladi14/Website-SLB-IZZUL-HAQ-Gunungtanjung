// routes/students.js
import { Router } from 'express';
const router = Router();
import { getStudents, createStudent, updateStudent, deleteStudent } from '../controllers/studentsController';

router.get('/', getStudents);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
