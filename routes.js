const express = require('express');
const router = express.Router();
const emailController = require('./controllers');

router.get('/', emailController.showForm);
router.post('/send', emailController.sendEmail);

module.exports = router;
