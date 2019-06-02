//import myVar from './app.js'
var db = require('../models');
//var app = require('../app');
var myVar;

exports.sendSMS = function(req, res) {
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    const accountSid = 'ACb63c109c52daf392846e20ed706d4afd';
    const authToken = '99e800ac8597937082f6e0e946d66fa7';
    const client = require('twilio')(accountSid, authToken);


    client.messages
      .create({
        body: "Min Suk. Are You Ok? Yes or No. If you dont respond within 3 min we will contact Emergency Number",
        from: "+18057931885",
        to: "+18052326140"
       })
      .then(message => console.log(message.sid));

    myVar = setTimeout(function(){
                          client.messages
                            .create({
                              body: "Timeout. Messaged Emergency Contact",
                              from: "+18057931885",
                              to: "+18052326140"
                            })
                            .then(message => console.log(message.sid));
                                  }, 15000); //180000
	res.json({message: 'This is from Eric'});
	console.log('Sent a message');
}

exports.callBack = function(req, res) {
    
    const MessagingResponse = require('twilio').twiml.MessagingResponse;
    const twiml = new MessagingResponse();

    if (req.body.Body == 'Yes') {
        twiml.message('Help is on the way. WAIT');
        //twiml.message(app.myVar);
        clearTimeout(myVar);
    } else if (req.body.Body == 'No') {
        twiml.message('Glad to hear. Have a good day!');
        clearTimeout(myVar);
    } else {
        twiml.message(
          'Please respond Yes or No'
        );
    }

    res.writeHead(200, { 'Content-Type': 'text/xml' });
    res.end(twiml.toString());
}