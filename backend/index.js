import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';    
import postsRoutes from './routes/route_posts.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use('/', postsRoutes);

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 