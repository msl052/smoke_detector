var express             = require('express'),
	    router              = express.Router(),
	    db                  = require('../models'),
	    userinfoHelpers     = require('../helpers/userinfo');

/******** sensor readings **********/

router.route('/userinfo')
    .get(userinfoHelpers.getUserInfo)
    .post(userinfoHelpers.textedUserInfo)
    .delete(userinfoHelpers.deleteUserInfo);

router.route('/userinfo/:id')
    .get(userinfoHelpers.getOneUserInfo)
    .delete(userinfoHelpers.deleteOneUserInfo);

module.exports = router;


