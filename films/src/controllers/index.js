const { catchAsync } = require("../utils");

module.exports = {
    getFilms: catchAsync(require("./getFilms")),
    getfilmsId: catchAsync(require("./getFilmsId")),
    createFilm: catchAsync(require("./createFilms"))
}