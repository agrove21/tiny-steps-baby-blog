const router = require('express').Router();
const userRoutes = require('./userRoutes');
const entryRoutes = require('./entryRoutes');
const babyRoutes = require('./babyRoutes');


router.use('/users', userRoutes);
router.use('/entries', entryRoutes);
router.use('/babies', babyRoutes);


module.exports = router;