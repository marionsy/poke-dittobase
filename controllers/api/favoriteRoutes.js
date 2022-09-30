const router = require('express').Router();
const { Favorites } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all locations
router.get('/', async (req, res) => {
  try {
    const favorites = await Favorites.findAll();
    res.status(200).json(favorites);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // CREATE a location
router.post('/', async (req, res) => {
try {
    const favorite = await Favorites.create(req.body);
    res.status(200).json(favorite);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a location
router.delete('/:id', async (req, res) => {
  try {
    const favoriteData = await Favorites.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!favoriteData) {
      res.status(404).json({ message: 'No pokemon found with this id!' });
      return;
    }

    res.status(200).json(favoriteData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;