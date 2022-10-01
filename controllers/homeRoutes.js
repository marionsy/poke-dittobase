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

// Get route to signup
router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/homepage');
    return;
  }
  
  res.render('signup');
});

module.exports = router;