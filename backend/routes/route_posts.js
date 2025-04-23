import express from 'express';
import {
    getAllPosts,
    getPostsByid,
    createPost,
    updatePost,
    deletePost
} from '../controllers/posts.js';

const router = express.Router();

router.get('/', getAllPosts);
router.get('/:id', getPostsByid);
router.post('/', createPost);
router.put('/:id', updatePost);
router.delete('/:id', deletePost);

export default router;