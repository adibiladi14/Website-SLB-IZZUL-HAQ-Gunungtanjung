// controllers/dashboardController.js
import { Visitor } from '../models';

export async function getVisitors(req, res) {
  try {
    const visitor = await Visitor.findOne({ where: { id: 1 } });
    res.json({ count: visitor.count });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
