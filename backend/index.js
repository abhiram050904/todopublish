const express = require('express');
const app = express();
require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;
const TaskRouter = require('./Routes/TaskRouter');
const bodyParser = require('body-parser');
const cors = require('cors');

if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../public/build")));
  
    app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "../public", "build", "index.html"));
    });
  }
app.get('/', (req, res) => {
    res.send('Hello from the server');
});

app.use(cors());
app.use(bodyParser.json());
app.use('/tasks', TaskRouter);

app.listen(PORT, () => {
    console.log(`Server is running on PORT=${PORT}`);
});
