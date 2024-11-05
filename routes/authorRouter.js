const { Router } = require("express");
const { getAuthorById } = require("../controllers/authorController");

const authorRouter = Router();

// Define the route that uses the controller method
authorRouter.get("/:authorId", getAuthorById);

authorRouter.get("/", (req, res) => res.send("All authors"));

module.exports = authorRouter;
