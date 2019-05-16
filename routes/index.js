var	express		= require('express'),
	  db     		= require('../models'),
	  router		= express.Router();

/*router.get('/',(req, res) => {
  db.MyProfile.findOne({})
  .then( function(settings){
    console.log("stuff happened");
  })
  .catch( function(err) {
    res.send(err);
  });
});
*/
// Fill routes for camera here
//router.get('/camera',(req, res) => {
  
//});

router.post('/configure', (req, res) => {

  console.log("submit button pushed");
	db.MyProfile.findOneAndUpdate({}, req.body.myprofile, {'new': true, upsert: true})
	.then( function(edited) {
		console.log(edited);
		console.log("submit button pressed");
		res.redirect('/camera');
	})
	.catch( function(err) {
		res.send(err);
	});
});

module.exports = router;
