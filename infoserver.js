let cors = require("cors");
let express = require("express");
let app = express();


app.use(cors());

app.use(express.static(__dirname + "/info"))

app.listen(3001, () => { console.log("roger roger serving homepage") })