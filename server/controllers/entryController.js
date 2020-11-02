const db = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
    postNewEntry: async (req, res) => {
        let decoded = jwt.decode(req.params.token);
        console.log(decoded);

        try {
            const { _id } = await db.Entry.create(req.body)
            const dbModel = await db.User.findByIdAndUpdate(decoded.id, { $push: { entries: _id } }, { new: true }) 
            res.json(dbModel);
        } catch (err) {
            res.status(422).json(err);
        }
    },
    getUserEntries: async (req, res) => {
        try {
            let decoded = await jwt.decode(req.params.token);

            db.User.findById(decoded.id)
                .populate("entries")
                .then(dbModel => res.json(dbModel))
            
        } catch (err) {
            res.status(422).json(error);
        }
    }

}