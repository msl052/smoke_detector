var mongoose = require('mongoose');


var myprofileSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
		//required: 'Must record first name'
	},
	lastName: {
		type: String,
		required: true
		//required: 'Must record last name'
	},
	address: {
		type: String,
		//required: 'Must record street address'
	},
	address2: {
		type: String,
		//required: 'Must record apartment number'
	},
	phoneNumber: {
		type: String,
		//required: 'Must record phone number'
	},
	emergencyNumber: {
		type: String,
		//required: 'Must record emergency number'
	}
});

var MyProfile = mongoose.model('MyProfile', myprofileSchema);

module.exports = MyProfile;