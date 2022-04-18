const db = require("../data/models");
const Employee = db.employee;
const Op = db.Sequelize.Op;


exports.update = async (req, res) => {
    const id = req.query.id;

    try {
        await Employee.update(req.body, {
            where: {
                id: id
                // returning: true
            }
        })
            .then(num => {
           
                if (num == 1) {
                    res.json({
                        status: 200,
                        msg: "empoyee updated successfully"
                    })
                } else {
                    res.json({
                        status: 404,
                        msg: "could not find employee"
                    })
                }
            
              
            })
    }

    catch (err) {
        res.send(err)
    }
   
    
               
}
    
       
       
    
