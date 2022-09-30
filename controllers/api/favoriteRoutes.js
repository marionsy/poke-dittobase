const router = require('express').Router();
const { Favorites } = require('../../models');
const withAuth = require('../../utils/auth');

// will add withAuth afer login is created

// GET all favorites
router.get('/', withAuth, async (req, res) => {
  try {
    const favorites = await Favorites.findAll({
     where: {
          user_id: req.session.user_id
        },
        include: [{ model: User }]
    });
    res.status(200).json(favorites);
  } catch (err) {
    res.status(500).json(err);
  }
});

// CREATE a favorite
router.post('/', withAuth, async (req, res) => {
try {
  const newFavorite = {
    user_id: req.session.user_id
  }
  const favorite = await Favorites.create(req.body);
    res.status(200).json(favorite);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a favorite
router.delete('/:id', withAuth, async (req, res) => {
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