var db = require('../models');

exports.sendSMS = function(req, res) {
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    const accountSid = 'ACb63c109c52daf392846e20ed706d4afd';
    const authToken = '99e800ac8597937082f6e0e946d66fa7';
    const client = require('twilio')(accountSid, authToken);
    
    client.messages
          .create({
            body: 'body',
            from: '+15017122661',
            statusCallback: 'http://smokedetextor.herokuapp.com/api/sms',
            to: '+15558675310'
          })
          .then(message => console.log(message.sid));
	 
	  
	res.json({message: 'This is from Eric'});
	console.log('Sent a message');
}

exports.callBack = function(req, res) {
    res.send(req.body);
}