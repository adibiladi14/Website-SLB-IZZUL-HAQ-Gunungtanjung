// routes/teachers.js
import { Router } from 'express';
const router = Router();
import { getTeachers, createTeacher, updateTeacher, deleteTeacher } from '../controllers/teachersController';

router.get('/', getTeachers);
router.post('/', createTeacher);
router.put('/:id', updateTeacher);
router.delete('/:id', deleteTeacher);

export default router;
