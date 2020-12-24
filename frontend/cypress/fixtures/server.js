const express = require ("express");
const mockData = [
      
];
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
      
      mockData.push(userData);
      res.json(mockData)
})

app.post('/reset', (req, res) => {
      while (mockData.length > 0) {
        mockData.pop()
      }
      res.sendStatus(204)
    })

// app.post('/reset', (req, res) => {
//       while (mockData.length > 0) {
//         mockData.pop()
//       }
//       res.sendStatus(204)
//     })

app.listen(PORT, console.log(`srever running on port${PORT}`))