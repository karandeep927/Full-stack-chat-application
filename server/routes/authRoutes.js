const {Router} = require('express');
const { registerUser, logInUser } = require('../controllers/authController');
const router = Router()

router.post('/signup',registerUser);
router.post('/login',logInUser)


module.exports = router