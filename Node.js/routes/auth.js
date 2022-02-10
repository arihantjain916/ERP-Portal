const express = require('express');
const router = express.Router();
const AuthCont = require('../controllers/authControllers');

router.post('/register', function(req, res){
    AuthCont.register
  });
module.exports = router;