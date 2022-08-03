import { RoomBoooking } from '../models/roombooking.js';
import { Booking } from '../models/booking.js';
import { Room } from '../models/room.js';

import { error505 } from '../utils/error.js';
import { getAll, getById, ifexist } from '../utils/crud.utils.js';
import { getDateTime } from '../utils/func.utils.js';
import { Guest } from '../models/guest.js'
import { state200, state201 } from '../utils/right.js';

async function makeBookingRoom(body, id) {
  const idbook = id;
  var { idroom } = body;
  try {
    if (ifexist(Room, idroom)) {
      const buildBody = {...body, idbook}
      const separate = new RoomBoooking(buildBody);
      await separate.save();
    }
  } catch (err) { }
}

function takeItemsAndSave(book, data) {
  const id = book?.get('id')
  for (var key in data) {
    if (data.hasOwnProperty(key)) 
      makeBookingRoom(data[key], id);
  }
}

export const booking = async (req, res) => {
  const { header, data } = req.body;
  try {
    if (ifexist(Guest, header.idguest)) {
      var created = getDateTime();
      var buildBody = {...header, created};
      const item = new Booking(buildBody);
      await item.save().then(() => takeItemsAndSave(item, data));
      state201(res, 'Datos generados!');
    } 
    res.status(500).json({msg: 'error :v'});
  } catch (err) {
    error505(res, 'in boookingReservation');
  }
}

export const getBookings = async (req, res) => {
  try {
    getAll(res, Booking);
  } catch (err) {
    error505(res, 'in getBooking')
  }
}

export const getDetailedRoomBooking = async (req, res) => {
  const { id } = req.params;
  try {
    const item = await Booking.findByPk(id);
    state200(res, item);
  } catch (err) {
    error505(res, 'in getDetailedBooking');
  }
}
