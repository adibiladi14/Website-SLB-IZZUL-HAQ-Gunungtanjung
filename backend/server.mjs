import express, { json } from 'express';
const app = express();
import materialsRoutes from '.routes/materials';

app.use(json());

app.use('/api/materials', materialsRoutes);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
