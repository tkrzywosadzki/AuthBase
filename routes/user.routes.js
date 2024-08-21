const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/logged', (req, res) => {
  if(req.isAuthenticated()) {
    const userName = req.user.name.givenName;
    const userSurname = req.user.name.familyName;
    const userAvatar = req.user._json.picture;

    res.render('logged', {userName, userSurname, userAvatar});
  } else {
    res.redirect('/user/no-permission')
  }
});

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
    if (req.isAuthenticated()) {
      res.render('userProfile');
    } else {
      res.redirect('/user/no-permission');
    }
  });

  router.get('/profile/settings', (req, res) => {
    if (req.isAuthenticated()) {
      res.render('userProfileSettings');
    } else {
      res.redirect('/user/no-permission');
    }
  });

module.exports = router;