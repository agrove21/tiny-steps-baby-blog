const router = require('express').Router();
const userRoute = require('./userRoute');
const loginRoute = require('./loginRoute');

router.use('/users', userRoute);
router.use('/login', loginRoute);

module.exports = router;