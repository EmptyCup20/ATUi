var express = require('express'),
    router = express.Router(),
    http = require('http'),
    app = express();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
