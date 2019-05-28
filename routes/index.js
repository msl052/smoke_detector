var	express		= require('express'),
	db     		= require('../models'),
	router		= express.Router();

router.get('/', (req,res) => {
  res.render('user');
});
router.get('/camera', (req,res) => {
  res.render('camera');
});

/*
router.get('/user',(req, res) => {
  db.MyProfile.findOne({})
  .then( function(userinfo){
    setting = userinfo;
    console.log("get /user");
    res.render('user');
    
  })
  .catch( function(err) {
    res.send(err);
  });
});


router.get('/camera', (req, res) => {
   db.MyProfile.findOne({})
  .then( function(settings){
    console.log("get /camera");
    res.render('camera');
  })
  .catch( function(err) {
    res.send(err);
  });
});*/

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
