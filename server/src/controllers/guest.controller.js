import { Guest } from '../models/guest.js';

import { error400, error409, error400, error505 } from '../utils/error.js';
import { create, update, getAll, deleteE, getById } from '../utils/crud.utils.js';

export const getGuests = async (req, res) => {
  try {
    getAll(res, Guest)
  } catch (err) {
    error505(res, 'in getGuests');
  }
}

export const getGuestDetailById = async (req, res) => {
  const { id } = req.params;
  try {
    getById(res, Guest, id);
  } catch (err) {
    error505(res, 'in getGuestDetailById');
  }
}

export const addGuest = async (req, res) => {
  try {
    const { body } = req;
    const exist = await Guest.findOne({
      where: {passport: body.passport}
    });
    if (exist)
      error409(res, body.passport);
    else 
      create(res, Guest, body, 'fue creado');
  } catch (err) {
    error505(res, 'in addGuest');
  }
}

export const updateGuestById = async (req, res) => {
  const { id } = req.params;
	const { body } = req;
  try {
    const exist = await Guest.findByPk(id);
    const passp = await Guest.findOne({
      where: {passport: body.passport}
    });
    if (!exist) 
      error400(res, id, 'No existe Guess con id');
    else if (passp)
      error409(res, passp);
    else 
      update(res, exist, body, id, 'Guest actualizado');
  } catch (err) {
    error505(res, 'in updateGuest');
  }
}

export const deleteGuestById = async (req, res) => {
  const { id } = req.params;
  try {
    const exist = await Guest.findByPk(id);
    if (exist)
      deleteE(res, exist, 'Guest eliminado');
  } catch (err) {
    error505(res, 'in deleteGuest');
  }
}
