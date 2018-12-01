var express = require('express');
var app = express();

app.set("view engine","ejs");
app.use(express.static('public'));
// app.get('/', function(req, res) {
//     res.send('Hello World');
// });

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
