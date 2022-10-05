const router = require('express').Router();
const { User, Favorite, Friend } = require('../models');
const withAuth = require('../utils/auth');
const getPokemonData = require('../utils/pokemon');

// Get route to login
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('login');
});

// Get route to logout
router.get('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  } else {
    res.redirect('/login');
  }
});

// Get route to signup
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.render('signup');
});

// Get route to homepage
router.get('/homepage', withAuth, (req, res) => {
  res.render('homepage', {
    user: {
      username: req.session.username
    },
    logged_in: req.session.logged_in
  });
})


// Get route to load the search results page
router.get('/search/pokemon/:pokemon', withAuth, async (req, res) => {
  const pokemon = await getPokemonData(req.params.pokemon);

  res.render('search-results', {
    pokemon,
    logged_in: req.session.logged_in
  });
})

// Get route to homepage
router.get('/favorites', withAuth, async (req, res) => {
  const favorites = await Favorite.findAll({
    where: {
      user_id: req.session.user_id
    }
  });

  const favoritePokemon = await Promise.all(favorites.map(async pokemon => {
    return await getPokemonData(pokemon.pokemon_name)
  }));

  res.render('favorites-page', {
    favoritePokemon,
    username: req.session.username,
    logged_in: req.session.logged_in
  });
})

// Get route to view friends
router.get('/friends', withAuth, async (req, res) => {
  const friendsData = await Friend.findAll({
    where: {
      user_id: req.session.user_id
    },
    include: [{ model: User }]
  });

  const friends = friendsData.map(friend => {
    return {
      id: friend.user.id,
      username: friend.user.username
    }
  });

  res.render('friends', {
    friends,
    logged_in: req.session.logged_in
  });
});

// Get route to individual friend's favorites
router.get('/friends/:username', withAuth, async (req, res) => {
  const friendUserData = await User.findOne({
    where: {
      username: req.params.username
    }
  });

  const friendFavorites = await Favorite.findAll({
    where: {
      user_id: friendUserData.id
    }
  });

  const friendData = await Friend.findOne({
    where: {
      user_id: req.session.user_id,
      friend_id: friendUserData.id
    }
  })

  const is_friend = (friendData) ? true : false;

  const favoritePokemon = await Promise.all(friendFavorites.map(async pokemon => {
    return await getPokemonData(pokemon.pokemon_name)
  }));

  res.render('friends-favorites', {
    favoritePokemon,
    is_friend,
    friend_username: req.params.username,
    friend_id: friendUserData.id,
    logged_in: req.session.logged_in
  });
});

// GET rout to search for a user
router.get('/search/friends/:username',withAuth, async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        username: req.params.username
      }
    });
    if (!userData) {
      res.status(404).json({
        message: "No user with this id!"
      });
    } else {
      res.status(200).json(userData);
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Catch all page for any n/a route
router.get('/*', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }

  res.redirect('login');
})

module.exports = router;