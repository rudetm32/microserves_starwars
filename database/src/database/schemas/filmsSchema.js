const { Schema } = require("mongoose");

const filmsSchema = new Schema({
    _id: String,
    title: String,
    opening_crawl: String,
    director: String,
    producer: String,
    release_date: Date,
    characters: [{type: String, ref: "Character"}],
    planets: [{ type: String, ref: "Planet"}]
});

filmsSchema.statics.list = async function(){
    return await this.find()
    .populate("characters", ["_id", "name"])
    .populate("planets", ["_id", "name"]);
}


module.exports = filmsSchema;