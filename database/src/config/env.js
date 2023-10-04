require("dotenv").config({ path: "~/OneDrive/Escritorio/star_wars_api_microservices/database/.env" });


module.exports = {
   MONGO_URI:process.env.MONGO_URI,
}