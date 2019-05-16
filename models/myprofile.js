var mongoose = require('mongoose');


var myprofileSchema = new mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: true
		//required: 'Must record last name'
	},
	address: {
		type: String,
		required: true
		//required: 'Must record street address'
	},
	address2: {
		type: String
		//required: 'Must record apartment number'
	},
	stateName: {
		type: String,
		required: true
		//required: 'Must record state name'
	},
	countryName: {
		type: String,
		required: true
		//required: 'Must record country name'
	},
	phoneNumber: {
		type: String,
		required: true
		//required: 'Must record phone number'
	},
	emergencyNumber: {
		type: String,
		required: true
		//required: 'Must record emergency number'
	}

});

var MyProfile = mongoose.model('MyProfile', myprofileSchema);

module.exports = MyProfile;