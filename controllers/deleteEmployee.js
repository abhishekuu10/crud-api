const db = require('../data/models');
const Employee = db.employee;
const Op = db.Sequelize.Op;

exports.del = async (req, res) => {
  const id = req.query.id;
  await Employee.destroy({
    where: {
      id: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.json({
          msg: 'employee was deleted successfully',
        });
      } else {
        res.json({
          msg: `could not delete employee with id ${id}. employee not found`,
        });
      }
    })
    .catch((err) => {
      res.send(err);
    });
};
