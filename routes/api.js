var express             = require('express'),
    router              = express.Router(),
    db                  = require('../models'),
    userinfoHelpers     = require('../helpers/userinfo');

/******** sensor readings **********/

router.route('/userinfo')
    .get(dataHelpers.getUserInfo)
    .post(dataHelpers.textedUserInfo)
    .delete(dataHelpers.deleteUserInfo);

router.route('/userinfo/:id')
    .get(dataHelpers.getOneUserInfo)
    .delete(dataHelpers.deleteOneUserInfo);

module.exports = router;

