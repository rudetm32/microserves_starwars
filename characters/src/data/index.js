const Characters = require("./characters.json")
const axios = require("axios")

module.exports = {
    list: async () => {
        const results = await axios.get("http://database:8004/Character");
        return results.data
    },
    create: async() => {
        throw Error("Error al crear el personaje");
    }
};

