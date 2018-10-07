const express = require('express');
router = express.Router();

router.get('/', (req, res) => {
  const { name } = req.cookies
  res.render('index', { name, page: 'index' })
})

router.post('/hello', (req, res) => {
  res.cookie('name', req.body.name)
  res.redirect('/')
})

router.post('/goodbye', (req, res) => {
  res.clearCookie('name')
  res.redirect('/')
})

module.exports = router;