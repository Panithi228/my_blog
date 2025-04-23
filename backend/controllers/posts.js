import db from '../db.js';

export const getAllPosts = async (req, res) => {
    try {
        const [rows] = await db.query(`
            SELECT posts.* FROM posts 
        `);
        res.json(rows);
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

export const getPostsByid = async (req, res) => {
    try {
        const [rows] = await db.query(`SELECT * FROM posts WHERE post_id = ?`, [req.params.id]);
        if(rows.length === 0) {
            return res.status(404).json({ message: 'Post not found' });
        } else {
            res.json(rows[0]);
        }
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

export const createPost = async (req, res) => {
    const { user_id, title, content, image_path } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO posts (user_id, title, content, image_path) VALUES (?, ?, ?, ?)',
            [user_id, title, content, image_path]
        );
        res.status(201).json({ message: 'Post created', post_id:result.insertId });
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

export const updatePost = async (req, res) => {
    const { title, content, image_path } = req.body;
    try {
        const [result] = await db.query(
            'UPDATE posts SET title = ?, content = ?, image_path = ? WHERE post_id = ?',
            [title, content, image_path, req.params.id]
        );
        res.json({ message: 'Post updated' });
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};

export const deletePost = async (req, res) => {
    try {
        await db.query('DELETE FROM posts WHERE post_id = ?', [req.params.id]);
        res.json({ message: 'Post deleted' });
    } catch(error) {
        res.status(500).json({ error: error.message });
    }
};