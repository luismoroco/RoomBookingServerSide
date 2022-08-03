import { state200, state201, state204 } from "./right.js";

export async function create(res, entity, body, message) {
	try {
		const newType = new entity(body);
		await newType.save();
		state201(res, body.name, message);
	} catch (err) { }
}

export async function update(res, entity, body, id, message) {
	try {
		await entity.update(body);
		state201(res, id, message);
	} catch (err) { }
}

export async function getAll(res, entity) {
	try {
		const rows = await entity.findAll();
		state200(res, rows);
	} catch (err) { }
} 

export async function deleteE(res, entity, message) {
	try {
		await entity.destroy();
		state204(res, message);
	} catch (err) { }
}

export async function getById(res, entity, id) {
	try {
		const item = await entity.findByPK(id);
		state200(res, item);
	} catch (err) { }
} 
