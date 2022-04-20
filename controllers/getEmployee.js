const db = require('../data/models');
const Employee = db.employee;
const Op = db.Sequelize.Op;

exports.get = async (req, res) => {
  try {
    const version = req.originalUrl.split('/')[2];
    console.log(version);

    let data = await Employee.findAll({
      // limit: 4,
      // offset: (req.query.page - 1) * 4,
    });
    var result = await paginated(data, parseInt(req.query.page));
    // console.log(data);
    res.json({
      status: true,

      employee: result,
    });
  } catch (err) {
    res.send(err);
  }
};

async function paginated(emp, page) {
  var result = {};

  const si = (page - 1) * 4;
  const li = page * 4;
  if (si > 0) {
    result.previous = {
      page: page - 1,
    };
  }
  if (li < emp.length) {
    result.next = {
      page: page + 1,
    };
  }
  result.results = emp.slice(si, li);

  return result;
}
