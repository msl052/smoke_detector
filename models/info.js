var mongoose	= require('mongoose');

var infoSchema = new mongoose.Schema({
	name:{
		type: String
	},
	address:{
		type: String
	},
	phoneNumber: {
		type: String
	},
	phoneNumberDisplay: {
	  type: String
	},
	emergencyNumber: {
		type: String
	},
	/*account_sid: {
	  type: String
	},
	account_token: {
	  type: String
	}*/

});
var userInfo = mongoose.model('userInfo',infoSchema);
module.exports = userInfo;
