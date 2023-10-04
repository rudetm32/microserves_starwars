const mongoose = require("mongoose");

const { MONGO_URI } = require("../config/env");


const conn = mongoose.createConnection(MONGO_URI);

module.exports={
    Characters:conn.model("Character", require("./schema/charactersSchema")),
    Films: conn.model("Film", require("./schema/filmsSchema")),
    Planets: conn.model("Planet", require("./schema/planetsSchema"))
}