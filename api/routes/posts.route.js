const express = require('express');
const router = express.Router();
const exampleMiddleWare = require('../middleware/example');
const exampleController = require('../controllers/example.controller');
const postsController = require('../controllers/posts.controller');

// @GET /posts
router.get('/', postsController.getAllPosts);

// @GET /posts
// router.get('/:postId', exampleMiddleWare, postsController.getPost);

module.exports = router;
