// controllers/articlesController.js
import { Article } from '../models';

export async function getArticles(req, res) {
  try {
    const articles = await Article.findAll();
    res.json(articles);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function createArticle(req, res) {
  try {
    const article = await Article.create(req.body);
    res.status(201).json(article);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function updateArticle(req, res) {
  try {
    const article = await Article.update(req.body, { where: { id: req.params.id } });
    res.json(article);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

export async function deleteArticle(req, res) {
  try {
    await Article.destroy({ where: { id: req.params.id } });
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
