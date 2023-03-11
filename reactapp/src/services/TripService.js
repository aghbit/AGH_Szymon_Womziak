const TripService = {
  create: (trip) => {
    let trips = [];
    if(localStorage.getItem("trips")) {
        trips = JSON.parse(localStorage.getItem("trips")).trips;
    }

    trips.push(trip);

    localStorage.setItem("trips", JSON.stringify({trips: trips}))
  },

  list: () => {
    if(localStorage.getItem("trips")) {
        return JSON.parse(localStorage.getItem("trips")).trips;
    } else {
        return [];
    }
  }
};

export default TripService;