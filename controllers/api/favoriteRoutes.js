const router = require('express').Router();
const { Favorite } = require('../../models');
const withAuth = require('../../utils/auth');

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
router.delete('/:pokemon', withAuth, async (req, res) => {
  try {
    const favoriteData = await Favorite.destroy({
      where: {
        pokemon_name: req.params.pokemon,
        user_id: req.session.user_id
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