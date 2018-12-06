var express = require('express');
var app = express();
var advertiserArray = { 
    count:"2", 
    results: [ 
        {
            name:"Bark Park",
            id:"0"
        },
        {
            name:"Vernon Co-op",
            id:"1"
        }, 
        {
            name:"Business 2",
            id:"2"
        }
    ] 
};


// app.use(express.static('public'));

// CORS - allow
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

app.get('/advertisers/', function(req, res) {
    // TODO: get advertisers from database
    res.setHeader('Content-Type','application/json');
    res.jsonp(advertiserArray);
});

app.get('/advertiser/:id', function(req,res) {
    // TODO: get advertisers from database
    var advert = {
        "name":"Bark Park FTW"
    };

    res.setHeader('Content-Type','application/json');
    res.jsonp(advert);
    console.log(advert);
});

app.get('/b/:type', function(req, res) {

    var options = {
        root: __dirname + '/public/assets/banner_lb/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp':Date.now(),
            'x-sent':true,
        }
    };
    var filenames = [
        "lb.png",
        "lb_fakenews_mar27.png",
        "lb_fakenews_mar27.png",
        "lb_fakenews_mar27.png",
        "lb.png"
    ];
    var rnd = Math.floor((Math.random() * 4) + 1);
    console.log(rnd);
    var bannerName = filenames[rnd];
    res.sendFile(bannerName, options, function(err) {
        if (err) {
            console.log("ERR");
        } else {
            console.log('Sent: ',bannerName);
        }
    });
});

app.get('/admin', function(req, res) {
    res.render('admin', {title:"Admin"});
});

app.get('/bc/:click_id', function(req, res) {
    console.log("Banner Clicked: ", req.params.click_id);
    res.redirect('/');
});

app.listen(3123, function() {
    console.log('Professional Banner Manager Servering on port 3123');
});
