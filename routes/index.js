const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Doctor = require('../models/doctor');





router.post('/user', (req, res, next) => {
	let personInfo = req.body;

	if (!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf) {
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			User.findOne({ email: personInfo.email }, (err, data) => {
				if (!data) {

					User.findOne({}, (err, data) => {


						// const salt = bcrypt.genSalt(10);
						// let newPassword = personInfo.password.toString();

						// personInfo.password = bcrypt.hash(newPassword, salt);


						let newPerson = new User({

							username: personInfo.username,
							role: personInfo.role,
							password: personInfo.password,
							activeuser: personInfo.activeuser,
							image: personInfo.image,
							email: personInfo.email
						});

						newPerson.save((err, Person) => {
							if (err)
								console.log(err);
							else
								console.log('Success');
								res.send(Person);
						});

					}).sort({ _id: -1 }).limit(1);
					res.send({ "Success": "You are regestered,You can login now." });
				} else {
					res.send({ "Success": "Email is already used." });
				}

			});
		} else {
			res.send({ "Success": "password is not matched" });
		}
	}

});



router.post('/user/login', (req, res, next) => {
	User.findOne({ email: req.body.email }, (err, data) => {
		if (data) {
			


			if (req.body.password===data.password) {
				
				res.send({ "Success": "Success!" });
			} else {
				res.send({ "Success": "Wrong password!" });
			}
		} else {
			res.send({ "Success": "This Email Is not regestered!" });
		}
	});

})


router.post('/doctor', (req, res, next) => {
	let personInfo = req.body;

	if (!personInfo.email || !personInfo.username || !personInfo.password || !personInfo.passwordConf) {
		res.send();
	} else {
		if (personInfo.password == personInfo.passwordConf) {

			Doctor.findOne({ email: personInfo.email }, (err, data) => {
				if (!data) {

					Doctor.findOne({}, (err, data) => {


						// const salt = bcrypt.genSalt(10);
						// let newPassword = personInfo.password.toString();

						// personInfo.password = bcrypt.hash(newPassword, salt);


						let newPerson = new Doctor({

							username: personInfo.username,
							role: personInfo.role,
							password: personInfo.password,
							activeuser: personInfo.activeuser,
							image: personInfo.image,
							email: personInfo.email
						});

						newPerson.save((err, Person) => {
							if (err)
								console.log(err);
							else
								console.log('Success');
								res.send(Person);
						});

					}).sort({ _id: -1 }).limit(1);
					res.send({ "Success": "You are regestered,You can login now." });
				} else {
					res.send({ "Success": "Email is already used." });
				}

			});
		} else {
			res.send({ "Success": "password is not matched" });
		}
	}

});



router.post('/doctor/login', (req, res, next) => {
	Doctor.findOne({ email: req.body.email }, (err, data) => {
		if (data) {
			


			if (req.body.password===data.password) {
				
				res.send({ "Success": "Success!" });
			} else {
				res.send({ "Success": "Wrong password!" });
			}
		} else {
			res.send({ "Success": "This Email Is not regestered!" });
		}
	});

})


	

module.exports = router;