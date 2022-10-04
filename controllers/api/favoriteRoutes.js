const router = require('express').Router();
const { Favorite } = require('../../models');
const withAuth = require('../../utils/auth');

// GET all favorites
router.get('/', withAuth, async (req, res) => {
  try {
    const favorites = await Favorite.findAll({
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
    user_id: req.session.user_id,
    pokemon_name: req.body.pokemon_name,
    nickname: req.body.nickname
  }
  const favorite = await Favorite.create(newFavorite);
  res.status(200).json(favorite);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a favorite
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const favoriteData = await Favorite.destroy({
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