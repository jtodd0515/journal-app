const db = require("../models");
const jwt = require("jsonwebtoken");

module.exports = {
    postNewEntry: async (req, res) => {
        let decoded = jwt.decode(req.params.token);
        console.log(decoded);

        try {
            await db.Entry.create(req.body)
                .then(({ _id }) => db.User.findByIdAndUpdate(decoded.id, { $set: { entries: _id } }, { new: true })
                ).then(dbModel => {
                    console.log(dbModel);
                    res.json(dbModel);
                });
        } catch (err) {
            res.status(422).json(err);
        }
    },

}