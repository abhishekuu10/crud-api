const exp = require("express");
const mongoose = require("mongoose");
const { application_name } = require("pg/lib/defaults");
require('dotenv').config()
const db = require("./data/models");
 
// env.config();
// const fs = require('fs');

const app = exp();

app.use(exp.json());
app.use(exp.urlencoded({ extended: true }));

// app.delete('/api/employee/', (req, res, next) => {
//   console.log(req);
//   next();
// })

app.use("/api", require("./routes/api").route);
// app.use('/employee/:id', require('./delete').deleteEmployee);

db.sequelize.sync();
app.listen(3050, () => {
  console.log(`server is running at: ${process.env.PORT}`);
});
