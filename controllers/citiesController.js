const cities = require("all-the-cities");
console.log(cities);

module.exports = {
    getCities: function(req, res) {
        const allCities = cities.filter(city => city);
        res.json(allCities);
    }
}