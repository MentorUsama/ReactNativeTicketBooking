var LoginDetail=
[
    {Name:"Muhammad Usama", PhoneNumber:"03472547540",Password:"password"},
    {Name:"Muhammad Usama", PhoneNumber:"03049758360",Password:"password"},
    {Name:"Muhammad Usama", PhoneNumber:"03422547740",Password:"password"},
    {Name:"Muhammad Usama", PhoneNumber:"09472446240",Password:"password"},
    {Name:"Muhammad Usama", PhoneNumber:"04473547140",Password:"password"},
    {Name:"Muhammad Usama", PhoneNumber:"03472544540",Password:"password"},
    {Name:"Muhammad Usama", PhoneNumber:"03471537510",Password:"password"},
    {Name:"Muhammad Usama", PhoneNumber:"03472999999",Password:"password"},
    {Name:"Muhammad Usama", PhoneNumber:"",Password:""}
];
const pendingBooking= // For carousele
[
    {PhoneNumber:"03472547540",Date:"25-10-2020",Arrival:'Lahore',Destination:'Multan'},
    {PhoneNumber:"03472547540",Date:"26-10-2020",Arrival:'Lahore',Destination:'Multan'},
    {PhoneNumber:"03472547540",Date:"27-10-2020",Arrival:'Lahore',Destination:'Multan'},
    {PhoneNumber:"03472547540",Date:"28-10-2020",Arrival:'Lahore',Destination:'Multan'},

    {PhoneNumber:"",Date:"25-10-2020",Arrival:'Lahore',Destination:'Multan'},
    {PhoneNumber:"",Date:"26-10-2020",Arrival:'Lahore',Destination:'Multan'},
    {PhoneNumber:"",Date:"27-10-2020",Arrival:'Lahore',Destination:'Multan'},
    {PhoneNumber:"",Date:"28-10-2020",Arrival:'Lahore',Destination:'Multan'}
];
// const bookedTicket=
// [
//     {PhoneNumber:"03472547540",Date:"28-10-2020",BusID:1,DepartureTime:'15:00'},
//     {PhoneNumber:"03472547540",Date:"27-10-2020",BusID:2,DepartureTime:'15:00'},
//     {PhoneNumber:"03472547540",Date:"26-10-2020",BusID:11,DepartureTime:'15:00'},
//     {PhoneNumber:"03472547540",Date:"25-10-2020",BusID:9,DepartureTime:'15:00'}
// ]





// var Buses=
// [
//     {id:1,seats:20,type:'Luxury',ticketPrice:500},
//     {id:2,seats:25,type:'Economy',ticketPrice:100},
//     {id:3,seats:23,type:'Economy',ticketPrice:100},
//     {id:4,seats:22,type:'Business',ticketPrice:400},
//     {id:5,seats:21,type:'Luxury',ticketPrice:500},
//     {id:6,seats:30,type:'Luxury',ticketPrice:500},
//     {id:7,seats:25,type:'Luxury',ticketPrice:500},
//     {id:8,seats:25,type:'Luxury',ticketPrice:500},
//     {id:9,seats:25,type:'Luxury',ticketPrice:500},
//     {id:10,seats:25,type:'Luxury',ticketPrice:500},
//     {id:11,seats:25,type:'Luxury',ticketPrice:500}
// ];
const cities=
[
    "Multan",
    "Lahore",
    "DG Khan",
    "Karachi",
    "Islamabad",
    "Hyderabad",
    "Sahiwal",
    "Banu",
    "Sawat",
    "Chitral",
    "India",
    "America"
];





const DateSchedule=
[
    {Date:'25-10-2020',Day:'Sunday'},
    {Date:'26-10-2020',Day:'Monday'},
    {Date:'27-10-2020',Day:'Tuesday'},
    {Date:'28-10-2020',Day:'Wednesday'}
]
const BusSchedule=
[
    // For Ease Mostly will be lahore to multan and multan to Lahore
    // Most Time Will be (9-12) And (15-16)
    // Mostly Buses Scheduled perday will be 2

    // Schedule on 25-10-2020 
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:1,Price:1000,BusStandard:'Luxury'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Multan',Destination:'Lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:1,Price:1000,BusStandard:'Luxury'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:2,Price:500,BusStandard:'Business'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Multan',Destination:'Lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:2,Price:500,BusStandard:'Business'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:3,Price:100,BusStandard:'Economy'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Multan',Destination:'Lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:3,Price:100,BusStandard:'Economy'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:4,Price:1000,BusStandard:'Luxury'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Multan',Destination:'lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:4,Price:1000,BusStandard:'Luxury'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:5,Price:500,BusStandard:'Business'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Multan',Destination:'lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:5,Price:500,BusStandard:'Business'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:6,Price:100,BusStandard:'Economy'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Multan',Destination:'lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:6,Price:100,BusStandard:'Economy'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:7,Price:1000,BusStandard:'Luxury'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Multan',Destination:'lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:7,Price:1000,BusStandard:'Luxury'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:8,Price:500,BusStandard:'Business'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Multan',Destination:'lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:8,Price:500,BusStandard:'Business'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:9,Price:100,BusStandard:'Economy'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Multan',Destination:'lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:9,Price:100,BusStandard:'Economy'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:10,Price:1000,BusStandard:'Luxury'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Multan',Destination:'lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:10,Price:1000,BusStandard:'Luxury'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:11,Price:500,BusStandard:'Business'},
    {Date:'25-10-2020',Day:'Sunday',Arrival:'Multan',Destination:'lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:11,Price:500,BusStandard:'Business'},
    // Schedule on 26-10-2020 
    {Date:'26-10-2020',Day:'Monday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:2,Price:500,BusStandard:'Business'},
    {Date:'26-10-2020',Day:'Monday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:5,Price:500,BusStandard:'Business'},
    {Date:'26-10-2020',Day:'Monday',Arrival:'Multan',Destination:'lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:5,Price:500,BusStandard:'Business'},
    {Date:'26-10-2020',Day:'Monday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:6,Price:100,BusStandard:'Economy'},
    {Date:'26-10-2020',Day:'Monday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:1,Price:1000,BusStandard:'Luxury'},
    {Date:'26-10-2020',Day:'Monday',Arrival:'Multan',Destination:'Lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:1,Price:1000,BusStandard:'Luxury'},
    {Date:'26-10-2020',Day:'Monday',Arrival:'Multan',Destination:'Lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:2,Price:500,BusStandard:'Business'},
    {Date:'26-10-2020',Day:'Monday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:3,Price:100,BusStandard:'Economy'},
    {Date:'26-10-2020',Day:'Monday',Arrival:'Multan',Destination:'Lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:3,Price:100,BusStandard:'Economy'},
    {Date:'26-10-2020',Day:'Monday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:4,Price:1000,BusStandard:'Luxury'},
    // Schedule on 27-10-2020 
    {Date:'27-10-2020',Day:'Tuesday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:1,Price:1000,BusStandard:'Luxury'},
    {Date:'27-10-2020',Day:'Tuesday',Arrival:'Multan',Destination:'Lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:1,Price:1000,BusStandard:'Luxury'},
    {Date:'27-10-2020',Day:'Tuesday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:2,Price:500,BusStandard:'Business'},
    {Date:'27-10-2020',Day:'Tuesday',Arrival:'Multan',Destination:'Lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:2,Price:500,BusStandard:'Business'},
    {Date:'27-10-2020',Day:'Tuesday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:3,Price:100,BusStandard:'Economy'},
    {Date:'27-10-2020',Day:'Tuesday',Arrival:'Multan',Destination:'lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:8,Price:500,BusStandard:'Business'},
    {Date:'27-10-2020',Day:'Tuesday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:9,Price:100,BusStandard:'Economy'},
    {Date:'27-10-2020',Day:'Tuesday',Arrival:'Multan',Destination:'lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:9,Price:100,BusStandard:'Economy'},
    {Date:'27-10-2020',Day:'Tuesday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:10,Price:1000,BusStandard:'Luxury'},
    {Date:'27-10-2020',Day:'Tuesday',Arrival:'Multan',Destination:'lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:10,Price:1000,BusStandard:'Luxury'},
    {Date:'27-10-2020',Day:'Tuesday',Arrival:'Lahore',Destination:'Multan',DepartureTime:'09:00',ArrivalTime:'12:00',BusID:11,Price:500,BusStandard:'Business'},
    {Date:'27-10-2020',Day:'Tuesday',Arrival:'Multan',Destination:'lahore',DepartureTime:'15:00',ArrivalTime:'16:00',BusID:11,Price:500,BusStandard:'Business'},
    // Schedule on 28-10-2020 
]
const scheduledBusSeats=
[
        // Schedule on 25-10-2020 
        {Date:'25-10-2020',DepartureTime:'09:00',BusID:1,Seats:{totalSeats:50,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[2,4,6,8,10,12,14,16,18,20]}},
        {Date:'25-10-2020',DepartureTime:'15:00',BusID:1,Seats:{totalSeats:30,Booked:[5,1,6,7,10],Gender:[5,1,6,7,10]}},
        {Date:'25-10-2020',DepartureTime:'09:00',BusID:2,Seats:{totalSeats:30,Booked:[10,20,30],Gender:[10,20,30]}},
        {Date:'25-10-2020',DepartureTime:'15:00',BusID:2,Seats:{totalSeats:30,Booked:[5,10,20,22],Gender:[5,10,20,22]}},
        {Date:'25-10-2020',DepartureTime:'09:00',BusID:3,Seats:{totalSeats:30,Booked:[30,29,28,27,26],Gender:[30,29,28,27,26]}},
        {Date:'25-10-2020',DepartureTime:'15:00',BusID:3,Seats:{totalSeats:30,Booked:[1,4,6,7,9,0],Gender:[1,4,6,7,9,0]}},
        {Date:'25-10-2020',DepartureTime:'09:00',BusID:4,Seats:{totalSeats:30,Booked:[12,13,14,15,16,17],Gender:[12,13,14,15,16,17]}},
        {Date:'25-10-2020',DepartureTime:'15:00',BusID:4,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[2,4,6,8,10,12,14,16,18,20]}},
        {Date:'25-10-2020',DepartureTime:'09:00',BusID:5,Seats:{totalSeats:30,Booked:[9,8,7,6,5,4,3],Gender:[9,8,7,6,5,4,3]}},
        {Date:'25-10-2020',DepartureTime:'15:00',BusID:5,Seats:{totalSeats:30,Booked:[],Gender:[]}},
        {Date:'25-10-2020',DepartureTime:'09:00',BusID:6,Seats:{totalSeats:30,Booked:[],Gender:[]}},
        {Date:'25-10-2020',DepartureTime:'15:00',BusID:6,Seats:{totalSeats:30,Booked:[],Gender:[]}},
        {Date:'25-10-2020',DepartureTime:'09:00',BusID:7,Seats:{totalSeats:30,Booked:[20],Gender:[20]}},
        {Date:'25-10-2020',DepartureTime:'15:00',BusID:7,Seats:{totalSeats:30,Booked:[8,20],Gender:[8,20]}},
        {Date:'25-10-2020',DepartureTime:'09:00',BusID:8,Seats:{totalSeats:30,Booked:[16,18,20],Gender:[16,18,20]}},
        {Date:'25-10-2020',DepartureTime:'15:00',BusID:8,Seats:{totalSeats:30,Booked:[18,20],Gender:[18,20]}},
        {Date:'25-10-2020',DepartureTime:'09:00',BusID:9,Seats:{totalSeats:30,Booked:[12,14,16,18,20],Gender:[12,14,16,18,20]}},
        {Date:'25-10-2020',DepartureTime:'15:00',BusID:9,Seats:{totalSeats:30,Booked:[20],Gender:[20]}},
        // Schedule on 26-10-2020 
        {Date:'26-10-2020',DepartureTime:'09:00',BusID:2,Seats:{totalSeats:30,Booked:[14,16,18,20],Gender:[14,16,18,20]}},
        {Date:'26-10-2020',DepartureTime:'09:00',BusID:5,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[2,4,6,8,10,12,14,16,18,20]}},
        {Date:'26-10-2020',DepartureTime:'15:00',BusID:5,Seats:{totalSeats:30,Booked:[8,10,12,14,16,18,20],Gender:[8,10,12,14,16,18,20]}},
        {Date:'26-10-2020',DepartureTime:'09:00',BusID:6,Seats:{totalSeats:30,Booked:[12,14,16,18,20],Gender:[12,14,16,18,20]}},
        {Date:'26-10-2020',DepartureTime:'09:00',BusID:1,Seats:{totalSeats:30,Booked:[20],Gender:[20]}},
        {Date:'26-10-2020',DepartureTime:'15:00',BusID:1,Seats:{totalSeats:30,Booked:[],Gender:[]}},
        {Date:'26-10-2020',DepartureTime:'15:00',BusID:2,Seats:{totalSeats:30,Booked:[12,14,16,18,20],Gender:[12,14,16,18,20]}},
        {Date:'26-10-2020',DepartureTime:'09:00',BusID:3,Seats:{totalSeats:30,Booked:[14,16,18,20],Gender:[14,16,18,20]}},
        {Date:'26-10-2020',DepartureTime:'15:00',BusID:3,Seats:{totalSeats:30,Booked:[16,18,20],Gender:[16,18,20]}},
        {Date:'26-10-2020',DepartureTime:'09:00',BusID:4,Seats:{totalSeats:30,Booked:[18,20],Gender:[18,20]}},
        // Schedule on 27-10-2020 
        {Date:'27-10-2020',DepartureTime:'09:00',BusID:1,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[0,1,0,1,0,1,1,1,0,1]}},
        {Date:'27-10-2020',DepartureTime:'15:00',BusID:1,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[0,1,0,1,0,1,1,1,0,1]}},
        {Date:'27-10-2020',DepartureTime:'09:00',BusID:2,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[0,1,0,1,0,1,1,1,0,1]}},
        {Date:'27-10-2020',DepartureTime:'15:00',BusID:2,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[0,1,0,1,0,1,1,1,0,1]}},
        {Date:'27-10-2020',DepartureTime:'09:00',BusID:3,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[0,1,0,1,0,1,1,1,0,1]}},
        {Date:'27-10-2020',DepartureTime:'15:00',BusID:8,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[0,1,0,1,0,1,1,1,0,1]}},
        {Date:'27-10-2020',DepartureTime:'09:00',BusID:9,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[0,1,0,1,0,1,1,1,0,1]}},
        {Date:'27-10-2020',DepartureTime:'15:00',BusID:9,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[0,1,0,1,0,1,1,1,0,1]}},
        {Date:'27-10-2020',DepartureTime:'09:00',BusID:10,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[0,1,0,1,0,1,1,1,0,1]}},
        {Date:'27-10-2020',DepartureTime:'15:00',BusID:10,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[0,1,0,1,0,1,1,1,0,1]}},
        {Date:'27-10-2020',DepartureTime:'09:00',BusID:11,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[0,1,0,1,0,1,1,1,0,1]}},
        {Date:'27-10-2020',DepartureTime:'15:00',BusID:11,Seats:{totalSeats:30,Booked:[2,4,6,8,10,12,14,16,18,20],Gender:[0,1,0,1,0,1,1,1,0,1]}},
        // Schedule on 28-10-2020 
]


const pendingBookingBus=
[
    {
        Bus:{Arrival: "Multan", ArrivalTime: "16:00", BusID: 1, BusStandard: "Luxury", Date: "25-10-2020", Day: "Sunday", DepartureTime: "15:00", Destination: "Lahore",Price: 1000},
        selectedData:
        [
            {seatID: 9, Gender: 0},
            {seatID: 14, Gender: 1},
            {seatID: 18, Gender: 1}
        ]
    },
    {
        Bus:{Arrival: "Multan", ArrivalTime: "16:00", BusID: 1, BusStandard: "Luxury", Date: "25-10-2020", Day: "Sunday", DepartureTime: "15:00", Destination: "Lahore",Price: 1000},
        selectedData:
        [
            {seatID: 9, Gender: 0},
            {seatID: 14, Gender: 1},
            {seatID: 18, Gender: 1}
        ]
    },
    {
        Bus:{Arrival: "Multan", ArrivalTime: "16:00", BusID: 1, BusStandard: "Luxury", Date: "25-10-2020", Day: "Sunday", DepartureTime: "15:00", Destination: "Lahore",Price: 1000},
        selectedData:
        [
            {seatID: 9, Gender: 0},
            {seatID: 14, Gender: 1},
            {seatID: 18, Gender: 1}
        ]
    },
    {
        Bus:{Arrival: "Multan", ArrivalTime: "16:00", BusID: 1, BusStandard: "Luxury", Date: "25-10-2020", Day: "Sunday", DepartureTime: "15:00", Destination: "Lahore",Price: 1000},
        selectedData:
        [
            {seatID: 9, Gender: 0},
            {seatID: 14, Gender: 1},
            {seatID: 18, Gender: 1}
        ]
    },
    {
        Bus:{Arrival: "Multan", ArrivalTime: "16:00", BusID: 1, BusStandard: "Luxury", Date: "25-10-2020", Day: "Sunday", DepartureTime: "15:00", Destination: "Lahore",Price: 1000},
        selectedData:
        [
            {seatID: 9, Gender: 0},
            {seatID: 14, Gender: 1},
            {seatID: 18, Gender: 1}
        ]
    },
    {
        Bus:{Arrival: "Multan", ArrivalTime: "16:00", BusID: 1, BusStandard: "Luxury", Date: "25-10-2020", Day: "Sunday", DepartureTime: "15:00", Destination: "Lahore",Price: 1000},
        selectedData:
        [
            {seatID: 9, Gender: 0},
            {seatID: 14, Gender: 1},
            {seatID: 18, Gender: 1}
        ]
    }
]


const purchasedTicket=[
    {
        Bus:{Arrival: "Multan", ArrivalTime: "16:00", BusID: 1, BusStandard: "Luxury", Date: "25-10-2020", Day: "Sunday", DepartureTime: "15:00", Destination: "Lahore",Price: 1000},
        selectedData:
        [
            {seatID: 9, Gender: 0},
            {seatID: 14, Gender: 1},
            {seatID: 18, Gender: 1}
        ]
    },
    {
        Bus:{Arrival: "Multan", ArrivalTime: "16:00", BusID: 1, BusStandard: "Luxury", Date: "25-10-2020", Day: "Sunday", DepartureTime: "15:00", Destination: "Lahore",Price: 1000},
        selectedData:
        [
            {seatID: 9, Gender: 0},
            {seatID: 14, Gender: 1},
            {seatID: 18, Gender: 1}
        ]
    },
    {
        Bus:{Arrival: "Multan", ArrivalTime: "16:00", BusID: 1, BusStandard: "Luxury", Date: "25-10-2020", Day: "Sunday", DepartureTime: "15:00", Destination: "Lahore",Price: 1000},
        selectedData:
        [
            {seatID: 9, Gender: 0},
            {seatID: 14, Gender: 1},
            {seatID: 18, Gender: 1}
        ]
    },
    {
        Bus:{Arrival: "Multan", ArrivalTime: "16:00", BusID: 1, BusStandard: "Luxury", Date: "25-10-2020", Day: "Sunday", DepartureTime: "15:00", Destination: "Lahore",Price: 1000},
        selectedData:
        [
            {seatID: 9, Gender: 0},
            {seatID: 14, Gender: 1},
            {seatID: 18, Gender: 1}
        ]
    },
    {
        Bus:{Arrival: "Multan", ArrivalTime: "16:00", BusID: 1, BusStandard: "Luxury", Date: "25-10-2020", Day: "Sunday", DepartureTime: "15:00", Destination: "Lahore",Price: 1000},
        selectedData:
        [
            {seatID: 9, Gender: 0},
            {seatID: 14, Gender: 1},
            {seatID: 18, Gender: 1}
        ]
    },
    {
        Bus:{Arrival: "Multan", ArrivalTime: "16:00", BusID: 1, BusStandard: "Luxury", Date: "25-10-2020", Day: "Sunday", DepartureTime: "15:00", Destination: "Lahore",Price: 1000},
        selectedData:
        [
            {seatID: 9, Gender: 0},
            {seatID: 14, Gender: 1},
            {seatID: 18, Gender: 1}
        ]
    }
]
export {LoginDetail,pendingBooking,cities,DateSchedule, BusSchedule,scheduledBusSeats, pendingBookingBus, purchasedTicket};