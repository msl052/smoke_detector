var mongoose	= require('mongoose');

var infoSchema = new mongoose.Schema({
	name:{
		type: String
	},
	address:{
		type: String
	},
	phoneNumber: {
		type: String,
		required: true
	},
	phoneNumberDisplay: {
	  type: String
	},
	emergencyNumber: {
		type: String
	},
	timerOff: {
		type: Boolean
	}

});
var userInfo = mongoose.model('userInfo',infoSchema);
module.exports = userInfo;
