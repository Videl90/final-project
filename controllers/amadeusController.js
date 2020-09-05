var Amadeus = require('amadeus');
const codes = require("../scripts/cityCodes");

var amadeus = new Amadeus({
  clientId: "3JAEb4dfA3ZTulm3jA731vPjzM4iWw44",
  clientSecret: "NVWCAApvpkcNcbQf"
});

module.exports = { 
  test: function(req,res) {
    console.log("REQ.BODY",req.body);
    const depDate = req.body.departureDate;
    const retDate = req.body.arrivalDate;
    const newDepDate = depDate.split("T");
    const newRetDate = retDate.split("T");
    console.log(newDepDate[0]);
    console.log(newRetDate[0]);
    const code = () => { 
      const data = {
        originCode: null,
        destinationCode: null
      }
      codes.map(city => { 
      if(city.city === req.body.origin) {
        data.originCode = city.value
      }
      if(city.city === req.body.destination) {
        data.destinationCode = city.value
      }
    }) 
    console.log(data); 
  };
  code();
    amadeus.shopping.flightOffersSearch.get({
    originLocationCode: req.body.originLocationCode,
    destinationLocationCode: req.body.destinationLocationCode,
    departureDate: req.body.departureDate,
    returnDate: req.body.returnDate,
    adults: req.body.adults
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