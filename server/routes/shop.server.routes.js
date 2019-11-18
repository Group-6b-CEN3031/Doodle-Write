const shopController = require("../controllers/shop.items.server.controller"),
    express = require("express"), 
    router = express.Router()

router.get('/shop/data', shopController.displayAll);

module.exports = router;