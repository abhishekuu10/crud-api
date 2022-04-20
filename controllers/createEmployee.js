const db = require('../data/models');
const Employee = db.employee;
const Op = db.Sequelize.Op;

exports.create = async (req, res) => {
  console.log('check 1');
  const { name, id, bloodgroup, salary, age, gender } = req.body;
  const version = req.originalUrl.split('/')[2];
  console.log(version);

  if (version === 'v1') {
    await Employee.create({
      name,
      bloodgroup,
      salary,
    })

      .then((data) => {
        res.json({
          status: 200,
          result: data,
        });
      })

      .catch((err) => {
        res.status(500).send(err);
      });
  } else if (version === 'v2') {
    await Employee.create({
      name,
      bloodgroup,
      salary,
      age,
      gender,
    })

      .then((data) => {
        res.json({
          status: 200,
          result: data,
        });
      })

      .catch((err) => {
        res.status(500).send(err);
      });
  }
};
