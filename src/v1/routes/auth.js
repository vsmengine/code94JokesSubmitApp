const express = require('express');

const router = express.Router();

const authController =  require('./../../controllers/authController');
const moderateAuthMiddleware = require('../../utils/moderateAuthMiddleware');

router.post('/login', async (req, res, next) => {
    authController.getAuthUser(req, res);
});

module.exports = router;
