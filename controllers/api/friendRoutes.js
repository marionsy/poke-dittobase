const router = require('express').Router();
const { where } = require('sequelize');
const { User, Friend } = require('../../models');
const withAuth = require('../../utils/auth');

// Get all friends
router.get('/', async (req, res) => {
  try {
    const friendData = await Friend.findAll({
      where: {
        // user_id: req.session.user_id
        // test value
        user_id: '1'
      }
  });
    res.status(200).json(friendData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one friend
router.get('/:id', async (req, res) => {
  try {
    const friendData = await Friend.findByPk(req.params.id, {
      include: [{ model: User }]
    });

    if (!friendData) {
      res.status(404).json({ message: 'No friend found with this id!' });
      return;
    }

    res.status(200).json(friendData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;