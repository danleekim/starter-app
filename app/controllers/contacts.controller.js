// const responses = require('../models/responses');
const path = require('path');
const apiPrefix = '/api/contacts';
const contactModel = require('../models/contact');
const contactsService = require('../services/contacts.service')({
	modelService: contactModel
});

module.exports = {
	getAll: getAll,
	insert: insert,
	getOneById: getOneById,
	removeById: removeById
}

function insert(req, res) {
	contactsService
		.insert(req.body)
		.then(res.status(200).json(req.body))
		.catch(err => {
			console.log(err.message)
		})
}

function getAll(req, res) {
	contactsService
		.getAll()
		.then(data => {
			console.log(data)
			res.status(200).json(data)
		})
		.catch(err => {
			console.log(err.message)
		});
}

function getOneById(req, res) {
	let queryCondition = {
		_id: req.params.id
	}
	contactsService
		.getOne(queryCondition)
		.then(contact =>{
			res.status(200).json(contact)
		})
		.catch(err => {
			console.log(err)
		})
}


function removeById(req, res) {
	let queryCondition = {
		_id: req.params.id
	}
	contactsService
		.removeOne(queryCondition)
		.then(data => {
			console.log(data)
			res.status(200).json(data)
		})
		.catch(err =>{
			console.log(err.message)
		})
}