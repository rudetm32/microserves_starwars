const Films = require("./films.json");

module.exports = {
    list: async () => {
      return Films; 
    },
    create: async () => {
      throw Error("Error al crear la pelicula")
    }
}