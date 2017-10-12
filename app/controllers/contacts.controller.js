// const responses = require('../models/responses');
const path = require('path');
const apiPrefix = '/api/contacts';
const contactModel = require('../models/contact');
const contactsService = require('../services/contacts.service')({
	modelService: contactModel
});

module.exports = contactsController;

function contactsController() {
	return {
		// getAll: getAll,
		// getOneById: getOneById,
		insert: insert,
		// updateById: updateById,
		// removeById: removeById
	};

	// function getAll(req, res) {
	// 	contactsService
	// 		.getAll()
	// 		.then(contacts => {
	// 			const responseModel = new responses.ItemsResponse();
	// 			responseModel.items = contacts;
	// 			res.json(responseModel);
	// 		})
	// 		.catch(err => {
	// 			res.status(500).send(new responses.ErrorResponse(err));
	// 		});
	// }

	// function getOneById(req, res) {
	// 	let queryCondition = {
	// 		_id: req.params.id
	// 	};

	// 	contactsService
	// 		.getOne(queryCondition)
	// 		.then(contact => {
	// 			const responseModel = new responses.ItemResponse();
	// 			responseModel.item = contact;
	// 			res.json(responseModel);
	// 		})
	// 		.catch(err => {
	// 			return res.status(500).send(new responses.ErrorResponse(err));
	// 		});
	// }

	function insert(req, res) {
		contactsService
			.insert(req.body)
			.then()
			// .then(contact => {
			// 	const responseModel = new responses.ItemResponse();
			// 	responseModel.item = contact;
			// 	res
			// 		.status(201)
			// 		.location(path.join(apiPrefix, contact._id.toString()))
			// 		.json(responseModel);
			// })
			.catch(err => {
				// console.log(res.status(500));
				console.log(res);
			});
	}

	// function updateById(req, res) {
	// 	let queryCondition = {
	// 		_id: req.params.id
	// 	};
	// 	contactsService
	// 		.updateOne(queryCondition, req.body)
	// 		.then(contact => {
	// 			const responseModel = new responses.ItemResponse();
	// 			res.status(204).json(responseModel);
	// 		})
	// 		.catch(err => {
	// 			return res.status(500).send(new responses.ErrorResponse(err.stack));
	// 		});
	// }

	// function removeById(req, res) {
	// 	let queryCondition = {
	// 		_id: req.params.id
	// 	};
	// 	contactsService
	// 		.removeOne(queryCondition)
	// 		.then(contact => {
	// 			const responseModel = new responses.ItemResponse();
	// 			responseModel.item = contact;
	// 			res.json(responseModel);
	// 		})
	// 		.catch(err => {
	// 			return res.status(500).send(new responses.ErrorResponse(err));
	// 		});
	// }
}