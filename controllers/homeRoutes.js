const router = require('express').Router();
const { User, Favorite, Friend } = require('../models');
const withAuth = require('../utils/auth');

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
      res.render('login');
    });
  } else {
    res.status(404).end();
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
    logged_in: req.session.logged_in
  });
})

// Get route to homepage
router.get('/favorites', withAuth, (req, res) => {
  res.render('favorites-page', {
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