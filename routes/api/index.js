const { Router } = require('express')
const route = Router();

// function version(req, res,next,val) {
//     return (req, res, next) => {
//         res.local.version=val
//    } 
// }

route.use('/v1', require('./v1').route);
route.use('/v2',require('./v2').route ) ;

module.exports = { route };
