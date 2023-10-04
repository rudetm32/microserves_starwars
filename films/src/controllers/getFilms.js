const films = require("../data");
const { response } = require("../utils")

module.exports = async (req, res) => {
    const result = await films.list();
    response(res, 200, result);
}