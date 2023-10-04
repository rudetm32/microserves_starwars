const { Schema } = require("mongoose");


const planetsShema = new Schema({
    _id: String,
    name: String,
    rotation_period: String,
    orbital_period: String,
    diameter: String,
    climate: String,
    gravity: String,
    terrain: String,
    surface_water: String,
    "residents": [{type: String, ref: "Character"}],
    "films": [{type:String, ref:"Films"}]
});


planetsSchema.statics.insert = async function (planetData) {
    return await this.create(planetData);
}

planetsSchema.statics.list = async function(){
    return await this.find()
    .populate("residents", ["_id", "name"])
    .populate("films", ["_id", "title"]);
}


planetsSchema.statics.get = async function (id) {
    return await this.findById(id)
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "title"]);
}


module.exports = planetsSchema;