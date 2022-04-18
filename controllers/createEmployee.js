const db = require("../data/models");
const Employee = db.employee;
const Op = db.Sequelize.Op;


exports.create = async (req, res) => {
    const { name, age, bloodgroup, salary } = req.body;
    

    await Employee.create({
        name,
        age,
        bloodgroup,
        salary
    })
        .then(data => {
            res.json({
                status:200,
                data:data
            })
        })
        .catch(err => {
        res.status(500).send(err)
    })
};