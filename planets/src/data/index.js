const axios = require("axios")

  
  module.exports = {
    list: async () => {
      const { data } = await axios.get("http://database:8004/Planets");
      return data;
    },
    create: async (planet) => {
      // throw new Error("DB ERROR: Method not implemented");
      const { data } = await axios.post("http://database:8004/Planets",planet);
      return data;
    },
    get: async(id) =>{
      const { data } = await axios.get(`http://database:8004/Planets/${id}`);
      return data
    },
    
  }
  