import { Router } from 'express';
import { addTypeRoom, updateTypeById, getTypeRooms, getRooms, addRoom, updateRoom } from '../controllers/room.controller.js';
import { addGuest, updateGuestById, deleteGuestById, getGuestDetailById, getGuests } from '../controllers/guest.controller.js';
import { booking, getBookings, getDetailedRoomBooking } from '../controllers/booking.controller.js';

const router = Router();

router.get('/room', getTypeRooms);
router.post('/room', addTypeRoom);
router.put('/room/:id', updateTypeById);

router.get('/rooms', getRooms);
router.post('/rooms', addRoom);
router.put('/rooms/:id', updateRoom);

router.get('/guest', getGuests);
router.get('/guest/:id', getGuestDetailById);
router.post('/guest', addGuest);
router.put('/guest/:id', updateGuestById);
router.delete('/guest/:id', deleteGuestById); 

router.post('/booking', booking);
router.get('/booking', getBookings);
router.get('/booking/:id', getDetailedRoomBooking);

export default router;
