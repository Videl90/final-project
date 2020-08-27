const db = require("../models");

module.exports = {
    create: function(req,res) {
        let userId = req.params.id;
        console.log("USERID",userId);
        db.Trip.create(req.body)
        .then(({_id}) => {
            console.log("TRIPID",_id);
            db.User.findByIdAndUpdate({ _id: userId }, { $push: { trips: _id } }, { new: true })
            .then(dbUser => console.log(dbUser));
        }) 
        .catch(err => {
            res.json(err);
        });
    },

    getTrips: function(req,res) {
        res.json("TRIPS");
    }
}