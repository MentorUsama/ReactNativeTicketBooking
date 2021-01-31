









/**
 * 
 * @param {*} Bus 
 * @param {*} BusSchedule 
 * When the bus is selected we have to get its seat detail again so that we get its lates updates in the next screen
 */
function GetSingleBus(Bus, BusSchedule,PhoneNumber) {
    var newBus = [];
    var pendingIndex = -1;
    var bookedIndex = -1;

    BusSchedule.map((bus, index) => {
        if (bus.Arrival == Bus.Arrival && bus.Destination == Bus.Destination && bus.BusID == Bus.BusID && bus.ArrivalTime == Bus.ArrivalTime && bus.Date == Bus.Date) {
            newBus = { ...bus, FireBaseIndex: index };
        }
    })

    if (newBus.Pending != null) {
        newBus.Pending.map(((pending, index1) => {
            if (pending.PhoneNumber == PhoneNumber) {
                pendingIndex = index1;
            }
        }))
    }


    if (newBus.Booked != null) {
        newBus.Booked.map(((booked, index2) => {
            if (booked.PhoneNumber == PhoneNumber) {
                bookedIndex = index2;
            }
        }))
    }
    
    newBus.pendingIndex=pendingIndex;
    newBus.bookedIndex=bookedIndex;

    if(newBus.Pending==null)
    newBus.Pending=[];
    if(newBus.Booked==null)
    newBus.Booked=[];
    
    return newBus;
}
/**
 * 
 * @param {*} BusSchedule 
 * Getting the dates from bus schedule
 */
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}
function GetDate(BusSchedule) {
    var Dates = [];
    BusSchedule.map(Bus => {
        Dates.push(Bus.Date);
    })
    var unique = Dates.filter(onlyUnique);
    return unique;
}
/**
 * 
 * @param {*} scheduleBuses 
 * GEtting pending detail from the bus schedule
 */
function GetPending(scheduleBuses) {
    var Buses = [];
    scheduleBuses.map((bus) => {
        if (bus.Pending.length != 0) {
            Buses.push(bus);
        }
    })
    return Buses;
}
/**
 *
 * @param {*} scheduleBuses
 * Getting booked ticket detail from the bus schedule
 */
function GetBooked(scheduleBuses) {
    var Buses = [];

    scheduleBuses.map((bus) => {
        if (bus.Booked.length != 0) {
            Buses.push(bus);
        }
    })
    return Buses;
}
/**
 * 
 * @param {*} scheduleBuses 
 * @param {*} PhoneNumber 
 * Filtering the bus schedule getting all the pending and booking in the form of aray
 * if phone number is given then also filter with respect to phone number
 */
function FilterBusSchedule(scheduleBuses, PhoneNumber) {
    if (scheduleBuses != null) {
        var Buses = [];
        // Maping bus schedule
        scheduleBuses.map(((bus, index) => {
            // Mapin pending schedule
            var pendingfound = false;
            var bookedfound = false;
            var pendingbusSeats = [];
            var bookedbusSeats = [];

            var pendingIndex = -1;
            var bookedIndex = -1;

            // Filtering with respect to phone number
            if (PhoneNumber != false) {
                if (bus.Pending != null) {
                    bus.Pending.map(((pending, index1) => {
                        if (pending.PhoneNumber == PhoneNumber) {
                            pendingfound = true;
                            pendingbusSeats = pending.seats;
                            pendingIndex = index1;
                        }
                    }))
                }


                if (bus.Booked != null) {
                    bus.Booked.map(((booked, index2) => {
                        if (booked.PhoneNumber == PhoneNumber) {
                            bookedfound = true;
                            bookedbusSeats = booked.seats;
                            bookedIndex = index2;
                        }
                    }))
                }
            }
            // Filtering without user respective
            else {
                if (bus.Pending != null) {
                    bus.Pending.map((pending => {
                        pendingbusSeats = pending.seats;
                    }))
                }


                if (bus.Booked != null) {
                    bus.Booked.map((booked => {
                        bookedbusSeats = booked.seats;
                    }))
                }
            }


            var tempPending = pendingbusSeats;
            var tempBooked = bookedbusSeats;
            var singleBus = { ...bus, Pending: tempPending, Booked: tempBooked, FireBaseIndex: index, pendingIndex, bookedIndex }
            Buses.push(singleBus);
        }
        ))
        return Buses;
    }
    return scheduleBuses;
}
/**
 * 
 * @param {*} singleBus 
 * @param {*} PhoneNumber 
 * @param {*} selectedSeats 
 * When the user selected the bus then adding these seats into array and updating on the firebase
 */
function updatePendingSeats(singleBus, PhoneNumber, selectedSeats) {
    var userIndex = -1;
    var seats = [];
    var found = false;
    console.log("Single=>",singleBus);
    if (singleBus != null) {
        singleBus.map(((pen, index) => {
            if (pen.PhoneNumber == PhoneNumber) {
                found = true;
                seats = [...pen.seats, ...selectedSeats];
                userIndex = index;
            }
        }))
    }
    else
    {
        singleBus=[];
    }

    if (found == false) {
        console.log(singleBus)
        seats=[...singleBus,{PhoneNumber,"seats":selectedSeats}];
        // seats=singleBus.Pending;
        // seats.push()
        // seats = selectedSeats;
        // seats = { PhoneNumber, seats };
    }
    return { userIndex, seats };
}
function updateBookingSeats(singleBus, PhoneNumber, selectedSeats) {
    
}
/**
 * 
 * @param {*} singleBus 
 * When selecting the seat we need to get all the seat that is booked and pending
 */
function GetAllSeats(singleBus) {
    var bookedSeats = [];
    if (singleBus.Booked != null) {
        singleBus.Booked.map((book => {
            book.seats.map((seat => {
                bookedSeats.push(seat.seatID);
            }))
        }))
    }
    if (singleBus.Pending != null) {
        singleBus.Pending.map((book => {
            book.seats.map((seat => {
                bookedSeats.push(seat.seatID);
            }))
        }))
    }
    return bookedSeats;
}
export { GetDate, GetPending, GetBooked, GetSingleBus, FilterBusSchedule, GetAllSeats, updatePendingSeats,updateBookingSeats };