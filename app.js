const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", __dirname + "/views"); // Or './views'

// First, use the urlencoded middleware
app.use(express.urlencoded({ extended: true }));

const routes = require("./routes/routes.js");
app.use("/", routes);

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
