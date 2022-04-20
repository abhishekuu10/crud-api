'use strict';

module.exports = {
async up (queryInterface, Sequelize) {
return await queryInterface.createTable("employees", {
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
type:Sequelize.STRING(3)
}
});
},

async down(queryInterface, Sequelize) {
return await queryInterface.dropTable('employees')
}
};


