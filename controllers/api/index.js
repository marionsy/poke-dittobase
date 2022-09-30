const router = require('express').Router();

const userRoutes = require('./userRoutes');
const favoriteRoutes = require('./favoriteRoutes');
const friendRoutes = require('./friendRoutes');

router.use('/user', userRoutes);
router.use('/friend', friendRoutes);
router.use('/favorites', favoriteRoutes);

module.exports = router;