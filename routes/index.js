var	express		= require('express'),
	  db     		= require('../models'),
	  router		= express.Router();

router.get('/',(req, res) => {
    var myprofile;
    
	db.MyProfile.findOne({})
	.then( function(result){
        myprofile = result;
	})
	.catch ( function(err) {
		res.send(err);
	});
});

router.get('/camera',(req, res) => {
    db.Data.find().limit(24).sort({timestamp: -1})
    .then( function(data) {
        var times = [];
        var temperatures = [];
        var humidities = [];
        var brightnesses = [];
        
        data.forEach( function (reading) {
            times.push("'" + reading.timestamp + "'");
            temperatures.push(reading.temperature);
            humidities.push(reading.humidity);
            brightnesses.push(reading.brightness);
        });
        
        res.render('camera', {data: data,
                               temperature: temperatures.reverse(),
                               humidity: humidities.reverse(),
                               brightness: brightnesses.reverse(),
                               times: times.reverse()
        });
    })
    .catch( function(err) {
        res.send(err);
    });
});

router.post('/configure', (req, res) => {
	console.log("submit button pressed");
	db.MyProfile.findOneAndUpdate({}, req.body.myprofile, {'new': true, upsert: true})
	.then( function(edited) {
		console.log(edited);
		console.log("submit button pressed");
		res.redirect('/');
	})
	.catch( function(err) {
		res.send(err);
	});
});

module.exports = router;
