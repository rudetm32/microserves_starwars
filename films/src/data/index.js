const axios = require("axios")
  

module.exports = {
  list: async () => {
    const { data } = await axios.get("http://database:8004/Films");
    return data;
  },
  create: async (film) => {
    // throw new Error("DB ERROR: Method not implemented");
    const { data } = await axios.post("http://database:8004/Films",film);
    return data;
  },
  get: async(id) =>{
    const { data } = await axios.get(`http://database:8004/Films/${id}`);
    return data
  },
  
}