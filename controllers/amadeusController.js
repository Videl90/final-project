var Amadeus = require('amadeus');

var amadeus = new Amadeus({
  clientId: "3JAEb4dfA3ZTulm3jA731vPjzM4iWw44",
  clientSecret: "NVWCAApvpkcNcbQf"
});

module.exports = { 
  test: function(req,res) {
      amadeus.shopping.flightOffersSearch.get({
      originLocationCode: 'SYD',
      destinationLocationCode: 'BKK',
      departureDate: '2020-10-01',
      returnDate: '2020-10-12',
      // adults: '1'
    // }).then(function(response){
    //   return amadeus.booking.flightOrders.post(
    //     JSON.stringify({
    //       'type': 'flight-order',
    //       'flightOffers': response.flightOffers,
    //       'travelers_info': []
    //     })
    //   );
    }).then(function(response){
      res.json(response.data);
    }).catch(function(responseError){
      res.json(responseError);
    });
  }
}

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