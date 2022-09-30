const router = require('express').Router();
const { User, Friend } = require('../../models');
const withAuth = require('../../utils/auth');

// will add withAuth after login is created

// Get all friends
router.get('/', withAuth, async (req, res) => {
  try {
    const friendData = await Friend.findAll({
      where: {
        user_id: req.session.user_id
      },
      include: [{ model: User }]
  });
    res.status(200).json(friendData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get one friend
router.get('/:id', withAuth, async (req, res) => {
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

// Add a friend
router.post('/add', withAuth, async (req, res) => {
  try {
    const newFriend = {
      user_id: req.session.user_id,
      friend_id: req.body.friend_id
    }
    const friendData = await Friend.create(newFriend);
    res.status(200).json(friendData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// DELETE a friend
router.delete('/:id', withAuth, async (req, res) => {
  try {
    const friendData = await Friend.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!friendData) {
      res.status(404).json({ message: 'No friend found with this id!' });
      return;
    }

    res.status(200).json(friendData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;