var mongoose = require('mongoose');


var myprofileSchema = new mongoose.Schema({
	first-name: {
		type: String,
		//required: 'Must record first name'
	},
	last-name: {
		type: String,
		//required: 'Must record last name'
	},
	address: {
		type: String,
		//required: 'Must record street address'
	},
	address-2: {
		type: String,
		//required: 'Must record apartment number'
	},
	stateName: {
		type: String,
		//required: 'Must record state name'
	},
	countryName: {
		type: String,
		//required: 'Must record country name'
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