var db = require('../models');

exports.getUserInfo = function(req, res) {
    db.MyProfile.find()
    .then( function(data) {
        res.json(data);
    })
    .catch( function(err) {
        res.send(err);
    });
};

exports.textedData = function(req, res) {
  res.json({message: 'Texted the User'});
};

exports.deleteUserInfo = function(req, res) {
    db.MyProfile.remove({})
    .then( function() {
        res.json({message: 'MyProfile wiped' });
    })
    .catch(function (err) {
        res.send(err);
    });
};

exports.getOneUserInfo = function(req, res) {
    db.MyProfile.findById(req.params.id)
    .then( function(foundData) {
        res.json(foundData);
    })
    .catch(function (err) {
        res.send(err);
    });
};

exports.deleteOneUserInfo = function(req, res) {
    db.MyProfile.remove({ _id: req.params.id})
    .then( function() {
        res.json({message: 'Successfully deleted' });
    })
    .catch(function (err) {
        res.send(err);
    });
};