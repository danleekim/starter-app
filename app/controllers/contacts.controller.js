// const responses = require('../models/responses');
const path = require('path');
const apiPrefix = '/api/contacts';
const contactModel = require('../models/contact');
const contactsService = require('../services/contacts.service')({
	modelService: contactModel
});

module.exports = {
	getAll: getAll,
	insert:insert,
 }

function insert(req, res) {
	contactsService
		.insert(req.body)
	 	.then(res.status(200).json(req.body))
		.catch(err => {
			console.log(err.message)
		}
	)
}

function getAll(req, res) {
	
	contactsService
		.getAll()
		.then(data => {
			console.log(data)
			res.status(200).json(data)
	
		})
		.catch();
}

