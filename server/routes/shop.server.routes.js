const shopController = require("../controllers/shop.items.server.controller"),
    express = require("express"), 
    router = express.Router()

router.get('/shop', shopController.displayAll);

module.exports = router;