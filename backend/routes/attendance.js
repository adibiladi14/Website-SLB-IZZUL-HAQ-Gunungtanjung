// routes/attendance.js
import { Router } from 'express';
const router = Router();
import { getAttendances, createAttendance, updateAttendance, deleteAttendance } from '../controllers/attendanceController';

router.get('/', getAttendances);
router.post('/', createAttendance);
router.put('/:id', updateAttendance);
router.delete('/:id', deleteAttendance);

export default router;
