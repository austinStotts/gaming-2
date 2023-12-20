let cors = require("cors");
let express = require("express");
let app = express();


app.use(cors());

app.use(express.static(__dirname + "/dist"))

app.listen(3000, () => { console.log("roger roger 3000") })