const db = require("../models");

module.exports = {
    postNewEntry: async (req, res) => {
        let decoded = jwt.decode(req.params.token);

        try {
            await db.Entry.create(req.body)
                .then(({ _id }) => db.User.findByIdAndUpdate(decoded.id, { $set: { plan: _id } }, { new: true })
            ).then(dbModel => {
                console.log(dbModel);
                res.json(dbModel);
                })
        } catch (err) {
            res.status(422).json(error);
        }
    },

}