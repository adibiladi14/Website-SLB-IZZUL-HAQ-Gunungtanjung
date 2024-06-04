// routes/articles.js
import { Router } from 'express';
const router = Router();
import { getArticles, createArticle, updateArticle, deleteArticle } from '../controllers/articlesController';

router.get('/', getArticles);
router.post('/', createArticle);
router.put('/:id', updateArticle);
router.delete('/:id', deleteArticle);

export default router;
