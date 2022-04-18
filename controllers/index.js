const { create } = require('./createEmployee')
const { get } = require('./getEmployee')
const { update } = require('./updateEmployee')
const { del } = require('./deleteEmployee')

module.exports = {
    create,get,update,del
}