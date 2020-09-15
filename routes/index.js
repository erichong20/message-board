var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi friends!",
    user: "Akshay",
    added: new Date()
  },
  {
    text: "Hello",
    user: "Eric",
    added: new Date()
  },
  {
    text: "Hi",
    user: "Allistair",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', { title: 'form'});
});

router.post('/new', (req, res, next) => {
  messages.push({
    text: req.body.message,
    user: req.body.name,
    added: new Date()
  });
  res.redirect("/");
})


module.exports = router;
