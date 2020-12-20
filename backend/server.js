const express = require ("express");
const mockData = require ("./dataMock")
const cors = require("cors");

const app = express();

const PORT = 8080;

app.use(cors());
app.use(express.json())

app.get("/", (req, res) => {
      res.json(mockData)
})

app.post("/user", (req, res) => {
      let userData = req.body;
      console.log(userData)
      mockData.push(userData);
      res.json(mockData)
})

app.listen(PORT, console.log(`srever running on port${PORT}`))