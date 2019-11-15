const express = require('express');
const router = express.Router();
const os = require('os');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express', os});
});

module.exports = router;