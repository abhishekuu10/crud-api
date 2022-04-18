const db = require("../data/models");
const Employee = db.employee;
const Op = db.Sequelize.Op;


exports.get= async (req, res) => {
    try {
        await Employee.findAll({
            limit: 4,
        })
            .then(data => {
                res.json({
                    status: 200,
                    data
                })
            })
    }
    catch(err) {
       res.send(err) 
    }
}