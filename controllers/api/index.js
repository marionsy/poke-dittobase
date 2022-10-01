const router = require('express').Router();

const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const friendRoutes = require('./friendRoutes');

router.use('/user', userRoutes);
router.use('/friend', friendRoutes);
router.use('/favorite', favoriteRoutes);

module.exports = router;