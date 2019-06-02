//import myVar from './app.js'
var db          = require('../models');
var http        = require('http');
var bodyParser  = require('body-parser');
var twilio      = require('twilio');
    //const account_sid = "AC17fd2606313da130848caa9cad2dfe66";
    //const auth_token = "58ac80c5d3234ed2903db5a986ba990c";
//var app = require('../app');
var myVar;

exports.sendSMS = function(req, res) {
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    console.log('Hello')
    const account_sid = "AC17fd2606313da130848caa9cad2dfe66";
    const auth_token = "58ac80c5d3234ed2903db5a986ba990c";
    const client = require('twilio')(account_sid, auth_token);


    client.messages
      .create({
        body: "Min Suk. Are You Ok? Yes or No. If you dont respond within 3 min we will contact Emergency Number",
        from: "+18057931885",
        to: "+18052326140"
       })
      .then(message => console.log(message.sid));

    /*myVar = setTimeout(function(){
                          client.messages
                            .create({
                              body: "Timeout. Messaged Emergency Contact",
                              from: "+18057931885",
                              to: "+18052326140"
                            })
                            .then(message => console.log(message.sid));
                                  }, 15000); //180000*/
	//res.json({message: 'This is from Eric'});
	//console.log('Sent a message');
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