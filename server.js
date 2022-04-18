const exp = require("express");
const mongoose = require("mongoose");
const env = require('dotenv')
env.config();
// const fs = require('fs');

const app = exp();

app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));

app.use("/api", require("./routes/api").route);
// app.use('/employee/:id', require('./delete').deleteEmployee);

app.listen(3050, () => {
  console.log("server is running at: 3050");
});
