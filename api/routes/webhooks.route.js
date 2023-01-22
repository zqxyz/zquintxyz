const express = require('express');
const router = express.Router();
const webHooksService = require('../services/webhooks.service');

// @POST /webhooks/deploy
router.get('/deploy', webHooksService.deploy);

module.exports = router;
