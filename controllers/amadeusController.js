var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: process.env.API_KEY,
  clientSecret: process.env.API_SECRET
});

// amadeus.shopping.flightOffersSearch.get({
//     originLocationCode: 'SYD',
//     destinationLocationCode: 'BKK',
//     departureDate: '2020-08-01',
//     adults: '2'
// }).then(function(response){
//   console.log(response.data);
// }).catch(function(responseError){
//   console.log(responseError.code);
// });