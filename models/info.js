var mongoose	=require('mongoose');

var infoSchema = new mongoose.Schema({
	firstName:{
		type: String
	},
	lastName:{
		type:String
	},
	address:{
		type: String
	},
	aptNumber: {
		type: String
	},
	phoneNumber: {
		type: Number
	},
	emergencyNumber: {
		type: Number
	},

});
var userInfo = mongoose.model('userInfo',infoSchema);
module.exports = userInfo;
