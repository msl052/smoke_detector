var db          = require('../models');
var http        = require('http');
var bodyParser  = require('body-parser');
var twilio      = require('twilio');

const account_sid = "AC17fd2606313da130848caa9cad2dfe66";
const auth_token = "58ac80c5d3234ed2903db5a986ba990c";
const client = require('twilio')(account_sid, auth_token);
    //const account_sid = "AC17fd2606313da130848caa9cad2dfe66";
    //const auth_token = "58ac80c5d3234ed2903db5a986ba990c";
//var app = require('../app');
var emergencyNumber;
var fromNum = "+18057931885";
var phoneNumber; // = "+18052326140";
var name; // = "Eric";
var address;


var myVar;
exports.sendSMS = function(req, res) {
    // Download the helper library from https://www.twilio.com/docs/node/install
    // Your Account Sid and Auth Token from twilio.com/console
    // DANGER! This is insecure. See http://twil.io/secure
    //console.log('Hello')
    //const account_sid = "AC17fd2606313da130848caa9cad2dfe66";
    //const auth_token = "58ac80c5d3234ed2903db5a986ba990c";
    //const client = require('twilio')(account_sid, auth_token);
    db.userInfo.findOne({})
      .then( function(result) {
        name = result.name;
        phoneNumber = result.phoneNumber;
        emergencyNumber = result.emergencyNumber;
        address = result.address;
      });
    client.messages
      .create({
        body: name + ", do you need assistance? Please respond Yes or No within the next 3 minutes",
        from: fromNum,
        to: phoneNumber

       })
      .then(message => console.log(message.sid));
    myVar = setTimeout(function(){
                          client.messages
                            .create({
                              body: "Fire at " + address + "." + " Please send help immediately!",
                              from: fromNum,
                              to: emergencyNumber

                            })
                            .then(message => console.log(message.sid));
                                  }, 15000); //180000
	res.json({message: 'This is from Eric'});
}
exports.callBack = function(req, res) {
    const MessagingResponse = require('twilio').twiml.MessagingResponse;
    const twiml = new MessagingResponse();
    
    db.userInfo.findOne({})
    .then( function(result) {
      name = result.name;
      phoneNumber = result.phoneNumber;
      emergencyNumber = result.emergencyNumber;
      address = result.address;
    });
    
    
    if (req.body.Body == 'Yes') {
        twiml.message('Help is on the way. WAIT');
        client.messages
          .create({
            body: name + " needs help!",
            from: fromNum,
            to: emergencyNumber
          })
          .then(message => console.log(message.sid));
        client.messages
          .create({
             body: "Fire at " + address +"." + " Please send help immediately!",
             from: fromNum,
             to: emergencyNumber
          })
          .then(message => console.log(message.sid));
        //twiml.message(app.myVar);
        clearTimeout(myVar);
    } else if (req.body.Body == 'No') {
        /*client.messages
          .create({
            body: "Glad to hear that you are ok.",
            from: fromNum,
            to: phoneNumber
          })
        .then(message => console.log(message.sid));*/
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