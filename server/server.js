const express = require("./express.js")
 
// Use env port or default
const port = process.env.PORT || 3000;

const app = express.init()
app.listen(port, () => console.log(`Server now running on port ${port}!`));
