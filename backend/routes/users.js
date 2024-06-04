// routes/users.js
import { Router } from 'express';
const router = Router();
import { getUsers, createUser, updateUser, deleteUser } from '../controllers/usersController';

router.get('/', getUsers);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);  // Menambahkan rute untuk menghapus pengguna

export default router;
