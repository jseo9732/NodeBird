const express = require('express');

const router = express.Router();

router.use((req, res, next) => {
  res.locals.user = null;
  res.locals.followerCount = 0;
  res.locals.followingCount = 0;
  res.locals.followingIdList = [];
  next();
});

router.get('/profile', (req, res) => {
  res.render('profile', { title: '내 정보 - instagram' });
});

router.get('/join', (req, res) => {
  res.render('join', { title: '회원가입 - instagram' });
});

router.get('/', (req, res, next) => {
  const twits = [];
  res.render('main', {
    title: 'instagram',
    twits,
  });
});

module.exports = router;