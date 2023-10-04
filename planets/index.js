const server = require("./src/server");

const PORT = 8003;

server.listen(PORT, () => {
    console.log(`planets server listening on port ${PORT}`)
});