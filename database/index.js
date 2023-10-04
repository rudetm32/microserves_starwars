const server = require("./src/server");

const { Character } = require("./src/database");

Character.list().then((res)=>(res))
Character.get("2").then((res)=>(res))

server.listen(8004, () => {
    console.log("database server on port 8004")
})