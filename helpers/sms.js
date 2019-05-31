var db = require('../models');

exports.sendSMS = function(req, res) {
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
    const authToken = 'your_auth_token';
    const client = require('twilio')(accountSid, authToken);
    
    client.messages
          .create({
            body: 'body',
            from: '+15017122661',
            statusCallback: 'http://smokedetextor.herokuapp.com/api/sms',
            to: '+15558675310'
          })
          .then(message => console.log(message.sid));
	  
	  
	res.json({message: 'Texted the User'});
}

exports.postCallBack = function(req, res) {
    res.send(req.body);
}