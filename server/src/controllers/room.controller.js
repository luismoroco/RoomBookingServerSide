import { Room } from '../models/room.js';
import { Typeroom } from '../models/typeroom.js';

import { error505, error409, error400 } from '../utils/error.js';
import { create, update, getAll } from '../utils/crud.utils.js'

export const getTypeRooms = async (req, res) => {
	try {
		getAll(res, Typeroom);
	} catch (err) {
		error505(res, 'in getTypes');
	}
}

export const addTypeRoom = async (req, res) => {
	const { body } = req;
	try {
		const exist = await Typeroom.findOne({
			where: { name: body.name }
		});
		if (exist)
			error409(res, body.name);
		else
			create(res, Typeroom, body, `${body.name} fue creado`);
	} catch (err) {
		error505(res, 'in addType');
	}
}

export const updateTypeById = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const exist = await Typeroom.findByPk(id);
		if (!exist)
			error400(res, id, 'No existe el typeroom con id');
		else
			update(res, exist, body, id, 'Typeroom actualizado!');
	} catch (err) {
		error505(res, 'in updateType');
	}
}

export const getRooms = async (req, res) => {
	try {
		getAll(res, Room);
	} catch (err) {
		error505(res, 'in getTypes');
	}
}

export const addRoom = async (req, res) => {	
	const { body } = req;
	try {
		const exist = await Room.findOne({where: {name: body.name}});
		const type = await Typeroom.findByPk(body.idtype);
		if (exist) 
			error409(res, body.name);
		else if (!type)
			error400(res, body.idtype, 'No existe el typeroom con id');
		else
			create(res, Room, body, `${body.name} fue creado`);
	} catch (err) {
		error505(res, 'in addRoom');
	}
}

export const updateRoom = async (req, res) => {
	const { id } = req.params;
	const { body } = req;
	try {
		const exist = await Room.findByPk(id);
		const type = await Typeroom.findByPk(body.idtype);
		if (!exist)
			error400(res, id, 'No existe Room con id');
		else if (!type)
			error400(res, body.idtype, 'No existe el typeroom con id');
		else
			update(res, exist, body, id, 'Room actualizado!');
	} catch (err) {
		error505(res, 'in addRoom');
	}
}
