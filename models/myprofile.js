var mongoose = require('mongoose');


var myprofileSchema = new mongoose.Schema({
	firstName: {
		type: String,
<<<<<<< HEAD
		required: true
	},
	lastName: {
		type: String,
		required: true
=======
		//required: 'Must record first name'
	},
	lastName: {
		type: String,
>>>>>>> dcbcadc2e56b84134d8953e43be10a95165b2ea3
		//required: 'Must record last name'
	},
	address: {
		type: String,
<<<<<<< HEAD
		required: true
		//required: 'Must record street address'
	},
	address2: {
		type: String
=======
		//required: 'Must record street address'
	},
	address2: {
		type: String,
>>>>>>> dcbcadc2e56b84134d8953e43be10a95165b2ea3
		//required: 'Must record apartment number'
	},
	stateName: {
		type: String,
<<<<<<< HEAD
		required: true
=======
>>>>>>> dcbcadc2e56b84134d8953e43be10a95165b2ea3
		//required: 'Must record state name'
	},
	countryName: {
		type: String,
<<<<<<< HEAD
		required: true
=======
>>>>>>> dcbcadc2e56b84134d8953e43be10a95165b2ea3
		//required: 'Must record country name'
	},
	phoneNumber: {
		type: String,
<<<<<<< HEAD
		required: true
=======
>>>>>>> dcbcadc2e56b84134d8953e43be10a95165b2ea3
		//required: 'Must record phone number'
	},
	emergencyNumber: {
		type: String,
<<<<<<< HEAD
		required: true
=======
>>>>>>> dcbcadc2e56b84134d8953e43be10a95165b2ea3
		//required: 'Must record emergency number'
	}

});

var MyProfile = mongoose.model('MyProfile', myprofileSchema);

module.exports = MyProfile;