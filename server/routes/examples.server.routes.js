const shop = require("../controllers/shop.items.server.controller.js"),
    express = require("express"), 
    router = express.Router()

router.route("/api/shop")
  .get(shop.displayAll);

module.exports = router;