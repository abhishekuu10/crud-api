'use strict';

module.exports = {
async up (queryInterface, Sequelize) {
return await queryInterface.addColumn(
'employees',
'age', {
type: Sequelize.INTEGER
}
),
await queryInterface.addColumn(
'employees',
'gender', {
type: Sequelize.STRING(6)
}
)
},

async down (queryInterface, Sequelize) {
return await queryInterface.removeColumn(
'employees',
'age'
),
await queryInterface.removeColumn(
'employees',
'gender'
)
}
};