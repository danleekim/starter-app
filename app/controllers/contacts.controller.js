// const responses = require('../models/responses');
const path = require('path');
const apiPrefix = '/api/contacts';
const contactModel = require('../models/contact');
const contactsService = require('../services/contacts.service')({
	modelService: contactModel
});

// module.exports = contactsController;
module.exports = {
	getAll: getAll,
	insert:insert,
 }

function insert(req, res) {
	contactsService
		.insert(req.body)
	 	.then(
			console.log('got to then')
		 )
		.catch(err => {
			debugger
			// console.log(res.status(500));
			console.log('got to catch');
		});
}

function getAll(req, res) {
	debugger
	contactsService
		.getAll()
		.then(
			console.log("get em")
		)
		.catch();
}