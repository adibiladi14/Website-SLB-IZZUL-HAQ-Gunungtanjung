import { Router } from 'express';
const router = Router();
import { getMaterials, createMaterial, updateMaterial, deleteMaterial } from '../controllers/materialsController';

router.get('/', getMaterials);
router.post('/', createMaterial);
router.put('/:id', updateMaterial);
router.delete('/:id', deleteMaterial);

export default router;
