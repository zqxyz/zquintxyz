const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller');

// @GET /posts
router.get('/', postsController.getAllPosts);

// @GET /posts/id
router.get('/:id', postsController.getPost);

module.exports = router;
