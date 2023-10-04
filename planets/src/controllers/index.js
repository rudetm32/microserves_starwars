const { catchAsync } = require("../utils");


module.exports = {
    getPlanets: catchAsync(require("./getPlanets")),
    getPlanetsId: catchAsync(require("./getPlanetsId")),
    createPlanets: catchAsync(require("./createPlanets"))
}