async function checkCitiesNominations(cities) {
  return new Promise((resolve, reject) => {
    if (cities.length >= 4) {
      resolve(cities);
    } else {
      reject("Less cities nominations! Event has been cancelled!");
    }
  });
}

async function bookFlighTickets(cities) {
  return new Promise((resolve, reject) => {
    for (const city of cities) {
      if (city !== "Bangalore")
        console.log(
          `Flights are booked for all the employees from city ${city}!`
        );
    }
    if (cities.length >= 4) resolve(cities);
    else reject("Flights are not available! Conference has been cancelled!");
  });
}

async function bookHotels(cities) {
  return new Promise((resolve, reject) => {
    if (cities.length < 10) {
      reject("Hotels are not available! Conference has been cancelled!");
      //Try throw exception
      //console.log('Okay')
    } else {
      for (const city of cities) {
        if (city !== "Bangalore")
          console.log(
            `Hotels are booked for all the employees from city ${city}!`
          );
      }
    }
  });
}

async function localTravelBooking(cities) {
  return new Promise((resolve, reject) => {
    // for (const city of cities) {
    //   // if (city !== "Bangalore")
    //   console.log(`Cabs are booked for all the employees from city ${city}!`);
    // }
    //if (cities.length >= 4) resolve(cities);
    reject("No cabs are available");
  });
}

async function confirmation(cities) {
  return new Promise((resolve, reject) => {
    for (const city of cities) {
      console.log(
        `Flight tickets and hotel booking confirmation has been sent to all the employees from city ${city} via email and WhatsApp!`
      );
    }
    resolve(cities);
  });
}

async function arrangeConference(...cities) {
  try {
    const nominationCities = await checkCitiesNominations(cities);
    const flightBookingCities = await bookFlighTickets(nominationCities);
    await bookHotels(flightBookingCities);
    const localTravelCities = await localTravelBooking(nominationCities).catch(
      (reason) => console.log(reason)
    );
    await confirmation(nominationCities);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Conference workflow Finished!");
  }
}

arrangeConference("Bangalore", "Chennai", "Delhi", "Pune");
