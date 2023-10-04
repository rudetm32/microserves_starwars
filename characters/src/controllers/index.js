const { catchAsync } = require("../utils") 


module.exports = {
getCharacters: catchAsync(require("./getCharacters")),
createCharacter: catchAsync(require("./createCharacter")),
getCharactersId: catchAsync(require("./getCharactersId"))
}