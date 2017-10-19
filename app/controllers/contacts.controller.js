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
	removeById: removeById,
	updateById: updateById,
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
		.then(data => {
			console.log(data._doc)
			res.status(200).json(data._doc)
		})
		.catch(err => {
			console.log(err.message)
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
		.catch(err => {
			console.log(err.message)
		})
}

function updateById(req, res) {
	let queryCondition = {
		_id: req.params.id
	};
	contactsService
		.updateOne(queryCondition, req.body)
		.then(data => {
			res.status(204).json(data);
		})
		.catch(err => {
			console.log(err.stack);
		});
}