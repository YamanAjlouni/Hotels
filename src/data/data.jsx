const data = {
    Damascus: {
        name: 'Damascus',
        description: 'Damascus is the oldest city in the world ',
        image: (require('../assets/images/damascus/damascusCity2.webp')), // Add an image URL for Damascus city
        hotels: [
            {
                id: 1,
                name: 'Four Seasons',
                description: 'The hotel features restaurant, bars, pool, gymnasium and Spa. ',
                stars: 5,
                image: (require('../assets/images/damascus/damascusHotels/fourseasons/four-seasons-hotel.jpg')), // Add an image URL for the hotel
                rooms: [
                    {
                        roomName: 'Room for one person',
                        roomType: 'Single',
                        price: `1,300,000`,
                        description: 'Single room',
                        image: (require('../assets/images/damascus/damascusHotels/fourseasons/fourseasons-rooms/four-seasons-room2.jpg')) // Add an image URL for the room
                    },
                    {
                        roomName: 'Room for two person',
                        roomType: '',
                        price: `1,600,000`,
                        description: 'Single room',
                        image: (require('../assets/images/damascus/damascusHotels/fourseasons/fourseasons-rooms/four-seasons-room1.jpg')) // Add an image URL for the room
                    },
                    // More rooms
                ]
            },
            {
                id: 1,
                name: 'Seven Gates',
                description: 'Seven Gates Hotel is a five-stars hotel in Syria, located in the center of the capital, Damascus, overlooking the Omayyad Square',
                stars: 5,
                image: (require('../assets/images/damascus/damascusHotels/sevenGates/sevenGates-damascus-hotel.jpg')), // Add an image URL for the hotel
                rooms: [
                    {
                        roomName: 'Room for one person',
                        roomType: 'Single',
                        price: '1,230,000',
                        description: 'Single room',
                        image: require('../assets/images/damascus/damascusHotels/sevenGates/sevenGates-rooms/sevenGates-room1.jpg') // Add an image URL for the room
                    },
                    // More rooms
                ]
            },
            // More hotels
        ]
    },
    Lattakia: {
        image: 'url-to-lattakia-image.jpg',
        hotels: [
            // Hotels in Lattakia
        ]
    },
    Tartous: {
        image: 'url-to-tartous-image.jpg',
        hotels: [
            {
                id: 1,
                name: 'Hotel A',
                description: 'description A',
                stars: 100,
                image: 'url-to-tartous-hotel-a-image.jpg',
                rooms: [
                    {
                        roomType: 'Single',
                        price: 120,
                        description: 'Single Room for one person',
                        image: 'url-to-tartous-single-room-image.jpg'
                    }
                ]
            }
        ]
    }
    // More cities
};

export default data;