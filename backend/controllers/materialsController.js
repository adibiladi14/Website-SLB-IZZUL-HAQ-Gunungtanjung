import { Material } from '../models';

// Mendapatkan semua materi pembelajaran
export async function getMaterials(req, res) {
    try {
        const materials = await Material.findAll();
        res.json(materials);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Membuat materi pembelajaran baru
export async function createMaterial(req, res) {
    try {
        const material = await Material.create(req.body);
        res.status(201).json(material);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Memperbarui materi pembelajaran berdasarkan ID
export async function updateMaterial(req, res) {
    try {
        const [updated] = await Material.update(req.body, { where: { id: req.params.id } });
        if (updated) {
            const updatedMaterial = await Material.findOne({ where: { id: req.params.id } });
            res.json(updatedMaterial);
        } else {
            res.status(404).json({ error: 'Material not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

// Menghapus materi pembelajaran berdasarkan ID
export async function deleteMaterial(req, res) {
    try {
        const deleted = await Material.destroy({ where: { id: req.params.id } });
        if (deleted) {
            res.status(204).end();
        } else {
            res.status(404).json({ error: 'Material not found' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
}
