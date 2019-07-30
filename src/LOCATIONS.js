const LOCATIONS = {
  locations: [
    {
      "filterValue": "housing",
      "name": "Mary's Place",
      "address": "113 Dexter Ave N, Seattle, Wa",
      "zipcode": 98109,
      "lat": 47.6103984,
      "lng": -122.347374,
      "phone": "(206) 621-8474"
    },
    {
      "filterValue": "housing",
      "name": "Compass Housing Alliance",
      "address": "77 S Washington Street, Seattle, Wa",
      "zipcode": 98104,
      "lat": 47.6013886,
      "lng": -122.3376086,
      "phone": "(206) 474-1000"
    },
    {
      "filterValue": "housing",
      "name": "Sacret Heart Shelter",
      "address": "232 Warren Ave N, Seattle, Wa",
      "zipcode": 98109,
      "lat": 47.6113859,
      "lng": -122.3537189,
      "phone": "(206) 285-7489"
    },
    {
      "filterValue": "clothing",
      "name": "Bread of Life Mission",
      "address": "97 S Main Street, Seattle, Wa",
      "zipcode": 98104,
      "lat": 47.6009915,
      "lng": -122.3373137,
      "phone": "(206) 682-3579"
      "name": "University District Youth Center",
      "address": "4516 15th Ave NE, Seattle, WA 98105",
      "zipcode": 98105,
      "lat": 47.661859,
      "lng": -122.311670,
      "phone": "(206) 526-2992",
      "website": "https://youthcare.org/blog/youthcare-welcomes-university-district-youth-center/",
      // "hours": [
      //   "Monday: 7:00am to 2:00pm",
      //   "Tuesday: 7:00am to 2:00pm",
      //   "Wednesday: 7:00am to 2:00pm",
      //   "Thursday: 7:00am to 2:00pm",
      //   "Friday: 7:00am to 2:00pm",
      //   "Saturday: 7:00am to 2:00pm",
      //   "Sunday: 7:00am to 2:00pm"
      // ]
    },
    {
      "filterValue": "clothes",
      "name": "Orion Center",
      "address": "1828 Yale Ave, Seattle, WA 98101",
      "zipcode": 98101,
      "lat": 47.618233,
      "lng": -122.330391,
      "phone": "(206) 622-5555",
      "website": "https://youthcare.org/homeless-youth-services/engagement-services/youthcares-orion-center/",
      // "hours": [
      //   "Monday: 12:00pm to 3:00pm",
      //   "Tuesday: 12:00pm to 3:00pm",
      //   "Wednesday: 12:00pm to 3:00pm",
      //   "Thursday: Closed",
      //   "Friday: 12:00pm to 3:00pm",
      //   "Saturday: Closed",
      //   "Sunday: Closed"
      // ]
    },
    {
      "name": "Drop In and Young Adult Emergency Shelter",
      "address": "2709 3rd Avenue Seattle, WA 98121",
      "zipcode": 98121,
      "lat": 47.617148,
      "lng": -122.349536,
      "phone": "(206) 374-0866",
      "website": "https://nhmin.org/",
      // "hours": [
      //   "Monday: 7:00pm to 9:00pm",
      //   "Tuesday: 7:00pm to 9:00pm",
      //   "Wednesday: 7:00pm to 9:00pm",
      //   "Thursday: 7:00pm to 9:00pm",
      //   "Friday: Closed",
      //   "Saturday: Closed",
      //   "Sunday: 7:00pm to 9:00pm"
      // ]
    },
    {
      "filterValue": "clothing",
      "name": "St. Francis House",
      "address": "169 12th Ave, Seattle, Wa",
      "zipcode": 98122,
      "lat": 47.60268,
      "lng": -122.335294,
      "phone": "(206) 621-0945"
    },
    {
      "filterValue": "clothing",
      "name": "Lazarus Center",
      "address": "2329 Rainier Ave S, Seattle, Wa",
      "zipcode": 98144,
      "lat": 47.5935194,
      "lng": -122.3358798,
      "phone": "(206) 623-7219"
    },
    {
      "filterValue": "food",
      "name": "St. Vincent De Paul Georgetown Food Bank",
      "address": "5972 4th Ave S, Seattle, Wa",
      "zipcode": 98108,
      "lat": 47.5757879,
      "lng": -122.3640722,
      "phone": "(206) 767-9975"
    },
    {
      "filterValue": "food",
      "name": "Pike Market Food Bank",
      "address": "1531 Western Ave P, Seattle, Wa",
      "zipcode": 98101,
      "lat": 47.6055301,
      "lng": -122.3432139,
      "phone": "(206) 626-6462"
      "lat": 47.615584,
      "lng": -122.307734,
      "phone": "(206) 726-8500",
      "website": "http://www.psks.org/",
      // "hours": [
      //   "Monday: 5:30am - 9:30pm",
      //   "Tuesday: 5:30am - 9:30pm",
      //   "Wednesday: 5:30am - 9:30pm",
      //   "Thursday: 5:30am - 9:30pm",
      //   "Friday: 5:30am - 9:30pm (Closed 11am - 2pm)",
      //   "Saturday: 5:30am - 9:30pm",
      //   "Sunday: 5:30am - 9:30pm"
      // ]
    },
    {
      "filterValue": "food",
      "name": "Ballard Food Bank",
      "address": "5130 Leary Way NW, Seattle, Wa",
      "zipcode": 98107,
      "lat": 47.6336684,
      "lng": -122.3909699,
      "phone": "(206) 789-7800"
    },
    {
      "filterValue": "health",
      "name": "Neighborcare Health a Ballard",
      "address": "1753 NW 56th St #200, Seattle, Wa",
      "zipcode": 98101,
      "lat": 47.6356063,
      "lng": -122.3919512,
      "phone": "(206) 782-5939"
    },
    {
      "filterValue": "health",
      "name": "Pioneer Square Clinic",
      "address": "206 3rd Ave S, Seattle, Wa",
      "zipcode": 98104,
      "lat": 47.6013277,
      "lng": -122.3370544,
      "phone": "(206) 744-1500"
    },
    {
      "filterValue": "health",
      "name": "Womens Wellness Center",
      "address": "1900 2nd Ave, Seattle, Wa",
      "zipcode": 98101,
      "lat": 47.6083272,
      "lng": -122.3461648,
      "phone": "(206) 256-0665"
    },
  ]
}

export default LOCATIONS;
