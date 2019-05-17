var	express		= require('express'),
	  db     		= require('../models'),
	  router		= express.Router();
<<<<<<< HEAD

=======
/*
>>>>>>> dcbcadc2e56b84134d8953e43be10a95165b2ea3
router.get('/',(req, res) => {
    var myprofile;
    
	db.MyProfile.findOne({})
	.then( function(result){
        myprofile = result;
	})
	.catch ( function(err) {
		res.send(err);
	});
<<<<<<< HEAD
});


router.post('/configure', (req, res) => {
	console.log("submit button pressed");
	res.redirect('/');
    /*db.MyProfile.findOneAndUpdate({}, req.body.myprofile, {'new': true, upsert: true})
    .then( function(edited) {
		console.log(edited);
		console.log("submit button pressed");
		res.redirect('/');
	})
	.catch( function(err) {
		res.send(err);
	});*/
});

module.exports = router;
=======
  
});

*/

router.get('/', (req,res) => {
        res.render('user');
    });
router.get('/camera', (req,res) => {
  res.render('camera');
});




router.get('/current_info', (req,res) => {
  // console.log('db:     ');
  // console.log(db);
  // console.log('db.userInfo:     ' + db.userInfo);
  db.userInfo.findOne({})
  .then( function(result) {
    // console.log(result);
    console.log('firstname: ' + result.firstName);
    res.render('info', { userInfo: result });
  })

});




router.post('/configure',  (req,res) =>{
    console.log(req.body.options)
    res.redirect('/');

});




router.get('/seedInfo', (req,res) => {

    var seed = {
      firstName: 'julie',
      lastName: 'Naglestad',
      address: 'UCSD',
      aptNumber: '234',
      phoneNumber: '1234354565',
      emergencyNumber: '563456756',
    }
  db.userInfo.findOneAndUpdate({}, seed, {'new': true, upsert:true})
  .then(function(userInfo){
    console.log(stats);
    res.redirect('/current_info');
  })
  .catch(function(err){
    res.send(err);
  })
});

module.exports=router;



>>>>>>> dcbcadc2e56b84134d8953e43be10a95165b2ea3
