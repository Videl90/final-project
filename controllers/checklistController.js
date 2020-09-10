const db = require("../models");

// Defining methods for the booksController
module.exports = {
    checkList: function(req, res) {
        console.log(req.body);
        let tripId = req.body.id;
        let items = req.body.baggage.items;
        db.Baggage.create({
            items: items
        })
        .then(({ _id }) => {
            console.log("BAGGAGE", _id);
                db.Trip.findByIdAndUpdate({ _id: tripId }, { $push: { checklist: _id } }, { new: true } )
                .then(dbTrip => res.json(dbTrip));
            })
            .catch(err => {
                res.json(err);
            });
    }
};
