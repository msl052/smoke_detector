var mongoose	= require('mongoose');

var infoSchema = new mongoose.Schema({
	name:{
		type: String
	},
	address:{
		type: String
	},
	phoneNumber: {
		type: Number,
		required: true
	},
	emergencyNumber: {
		type: Number
	}

});
var userInfo = mongoose.model('userInfo',infoSchema);
module.exports = userInfo;
