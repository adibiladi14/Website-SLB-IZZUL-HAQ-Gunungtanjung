// controllers/usersController.js
import { User } from '../models';

// Mendapatkan semua pengguna
export async function getUsers(req, res) {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Membuat pengguna baru
export async function createUser(req, res) {
    try {
        const user = await User.create(req.body);
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Memperbarui pengguna berdasarkan ID
export async function updateUser(req, res) {
    try {
        const [updated] = await User.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedUser = await User.findOne({ where: { id: req.params.id } });
            res.json(updatedUser);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Menghapus pengguna berdasarkan ID
export async function deleteUser(req, res) {
    try {
        const deleted = await User.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
