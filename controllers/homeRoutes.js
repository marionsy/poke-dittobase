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
    logged_in: req.session.logged_in
  });
})

router.get('/friends', withAuth, (req, res) => {
  res.render('friends', {
    logged_in: req.session.logged_in
  });
})

// Catch all page for any n/a route
router.get('/*', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }
  
  res.redirect('login');
})

module.exports = router;