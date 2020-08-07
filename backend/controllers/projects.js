const data = require('../data')
const ctrl = {};

ctrl.get = (req, res) => {
    if(data){
        res.send({msg: '', data: data});
    }else{
        res.send({msg: 'Projects not found'});
    }
}
module.exports = ctrl;