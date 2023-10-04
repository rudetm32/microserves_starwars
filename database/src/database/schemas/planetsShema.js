const { Schema } = require("mongoose");


const planetShema = new Schema({
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

planetsSchema.statics.list = async function(){
    return await this.find()
    
}

module.exports = planetShema;