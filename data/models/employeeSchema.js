module.exports = (sequelize, Sequelize) => {
    const Employee = sequelize.define("employee", {
      name: {
        type: Sequelize.STRING(20)
      },
      id: {
        type: Sequelize.INTEGER,
          autoIncrement:true,
          primaryKey: true
      },
       salary: {
        type: Sequelize.INTEGER
      },
      bloodgroup: {
        type: Sequelize.STRING(3)
      },
      age: {
        type:Sequelize.INTEGER
      },
      gender: {
        type:Sequelize.STRING(6)
      }
    });
    return Employee;
  };