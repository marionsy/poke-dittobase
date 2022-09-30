const router = require('express').Router();

// const userRoutes = require('./userRoutes');
// const favoriteRoutes = require('./favoriteRoutes');
const friendRoutes = require('./friendRoutes');

// router.use('/users', userRoutes);
// router.use('/favorites', favoriteRoutes);
router.use('/friend', friendRoutes);

module.exports = router;