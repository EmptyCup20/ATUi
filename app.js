var express = require('express')
//, routes = require('./routes')
    , bodyParser = require('body-parser')
    , cookieParser = require('cookie-parser')
    , logger = require('morgan')
    , http = require('http')
    , path = require('path')
    , ejs = require('ejs')
    , URL = require('url')
    , session = require("express-session");;

var app = express();

//设置默认端口, 启动views
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, ''));

app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(cookieParser());
app.use(session({
    secret: 'ATUi'
}))

app.use(express.static(path.join(__dirname, 'dist')));

app.use(function (req, res, next) {
    var url = req.originalUrl.substr(1, req.originalUrl.length - 1)
    var arg = URL.parse(req.url, true).query;

    //多语言控制加载方式 xx
    if(arg.lang) {
        req.session.lang = arg.lang;
        url = "";
    }
    if(!req.session.lang){
        req.session.lang = "CH";
    }
    var lang =  require('./lang/lang_' + req.session.lang);
    res.render(url, lang);
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

//socket 服务
var server = http.createServer(app);

//启动server
server.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});