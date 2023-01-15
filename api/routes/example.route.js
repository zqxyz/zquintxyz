const express = require('express');
const router = express.Router();
const exampleMiddleWare = require('../middleware/example');
const exampleController = require('../controllers/example.controller');

// @GET /example
router.get('/', exampleMiddleWare, exampleController.exampleFn);

module.exports = router;
