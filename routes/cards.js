const express = require('express');
const { data } = require('../data/flashData.json');
const { cards } = data;
router = express.Router();

router.get('/', (req, res) => {
  const cardId = Math.floor(Math.random() * cards.length)
  res.redirect(`/cards/${cardId}?side=question`)
})

router.get('/:id', (req, res) => {
  const { name } = req.cookies
  const { id } = req.params;
  const { side } = req.query;
  if (!id
    || isNaN(id)
    || id > cards.length
    || !side
    || !name
    ) {
    res.redirect('/cards')
  }

  const text = cards[id][side];
  let hint;
  let sideToShow;
  if (side === 'question') {
    hint = cards[id].hint;
    sideToShow = 'answer'
  } else if (side === 'answer') {
    sideToShow = 'question'
  }

  const templateData = {
    text, hint, sideToShow, id, name
  }
  res.render('card', templateData)
})

module.exports = router;