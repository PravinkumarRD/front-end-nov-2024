//Arrange Conference only if there are 4 cities nominations
//Arrange Flight tickets for all the employees except Bangalore
//Arrange hotels for all the employees except Bangalore
//Make the Local travel arrangement
//Send an email with all details to all the employees

function arrangeConference(...cities) {
  return new Promise((resolve, reject) => {
    if (cities.length >= 4) resolve(cities);
    else reject("Less cities nominations! Conference has been cancelled!");
  });
}

const conferenceConfirmation = arrangeConference(
  "Bangalore",
  "Chennai",
  "Delhi",
  "Hyderabad"
);
conferenceConfirmation
  .then((cities) => {
    console.log(
      `Received Notminations from ${cities}! Conference arrangement workflow started!`
    );
    return Promise.resolve(cities);
  })
  .then((cities) => {
    for (const city of cities) {
      if (city !== "Bangalore")
        console.log(
          `Flight tickets are arrangment for all the employees from city ${city}!`
        );
    }
    if (cities.length >= 4) return Promise.resolve(cities);
    else
      return Promise.reject(
        "Flight tickets are not available! Conference has been cancelled!"
      );
  })
  .then((cities) => {
    for (const city of cities) {
      if (city !== "Bangalore")
        console.log(
          `Hotels are booked for all the employees from city ${city}!`
        );
    }
    if (cities.length >= 4) return Promise.resolve(cities);
    else
      return Promise.reject(
        "Hotels are not available! Conference has been cancelled!"
      );
  })
  .then((cities) => {
    for (const city of cities) {
      console.log(`Local cabs are booked for all the employees from city ${city}!`);
    }
    if (cities.length >= 4) return Promise.resolve(cities);
  }).then((cities) => {
    for (const city of cities) {
      console.log(`Flight tickets and hotel booking confirmation has been sent to all the employees from city ${city} via email and WhatsApp!`);
    }
    if (cities.length >= 4) return Promise.resolve(cities);
  })
  .catch((reason) => {
    console.log(reason);
  })
  .finally(() => {
    console.log("Conference workflow Finished!");
  });
