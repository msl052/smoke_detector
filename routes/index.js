var	express		= require('express'),
	  db     		= require('../models'),
	  router		= express.Router();

router.get('/',(req, res) => {
    var setting;
    
	db.Settings.findOne({})
	.then( function(result){
        setting = result;
		return db.Stats.findOne();
	})
	.then( function(statResult) {
		var timeInHot = statResult.timeInHot/statResult.timeTotal;
		var timeInCold = statResult.timeInCold/statResult.timeTotal;
		var timeInHumid = statResult.timeInHumid/statResult.timeTotal;
		var timeInDry = statResult.timeInDry/statResult.timeTotal;
		var timeOn = statResult.timeOn/statResult.timeTotal;

		var stats = {
			avgTemperature: statResult.avgTemperature.toFixed(2),
			avgHumidity: statResult.avgHumidity.toFixed(2),
			avgBrightness: statResult.avgBrightness,
			temperatureData: [timeInHot, 1-timeInHot-timeInCold, timeInCold],
			humidityData: [timeInHumid, 1-timeInHumid-timeInDry, timeInDry],
			onData: [timeOn, 1-timeOn]
		};
		res.render('user', {settings: setting, stats: stats});
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

module.exports = router;
