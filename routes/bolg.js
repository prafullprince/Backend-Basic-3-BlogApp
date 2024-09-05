const express = require('express');
const router = express.Router();


const { createPost, getAllPosts } = require('../controllers/post');
const { createComment } = require('../controllers/Comment');
const { createLike } = require('../controllers/like');


router.post('/createPost',createPost);
router.post('/createComment/:pid',createComment);
router.get('/getAllPosts',getAllPosts);
router.post('/createLike/:pid',createLike);


module.exports = router;
