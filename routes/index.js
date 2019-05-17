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

