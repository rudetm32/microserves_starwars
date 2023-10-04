
const axios = require("axios")

module.exports = {
    list: async () => {
        const results = await axios.get("http://database:8004/Character");
        return results.data
    },
    create: async(character) => {
        // throw Error("Error al crear el personaje");
        const { data } =await axios.post("http://database:8004/Character", character)
        return data
    },
    get:async(id)=>{
        const { data } = await axios.get(`http://database:8004/Character/${id}`)
        return data
    }
};

