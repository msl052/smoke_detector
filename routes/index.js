var	express		= require('express'),
	  db     		= require('../models'),
	  router		= express.Router();

router.get('/', (req,res) => {
    res.render('user');
});

router.get('/camera', (req,res) => {
res.render('camera');
});

router.get('/current_info', (req,res) => {
    res.render('info');
  });


router.post('/configure',  (req,res) =>{

/*
router.post('/seedInfo', (req,res) => {

    var seed = {
      
      firstName: 'julie',
      lastName: 'Naglestad',
      address: 'UCSD',
      aptNumber: '234',
      phoneNumber: '1234354565',
      emergencyNumber: '563456756', 
    } */
    db.userInfo.findOneAndUpdate({}, req.body.info , {'new': true, upsert:true})
    .then(function(edited) {
      info = edited;
      res.redirect('/current_info');
  })
      .catch(function(err){
        res.send(err);
  })
});



module.exports=router;



 