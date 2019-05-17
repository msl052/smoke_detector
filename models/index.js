var	mongoose 	= require('mongoose'),
	dotenv		= require('dotenv');

dotenv.config();

mongoose.set('debug', true);
mongoose.connect(process.env.DATABASE);
console.log(process.env.DATABASE);
mongoose.promise = Promise;

<<<<<<< HEAD
module.exports.MyProfile = require('./myprofile');
=======
module.exports.userInfo = require('./info');
>>>>>>> dcbcadc2e56b84134d8953e43be10a95165b2ea3
