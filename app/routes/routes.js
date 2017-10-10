const router = require('express').Router();
const path = require('path')

module.exports = router; 


//get call on root path links the public/index.html file 
router.get('/', function (req, res){
    res.sendFile('public/index.html', {
        root: path.join(__dirname,'../..')
    });
})

router.post('/', function (req, res, next){
    res.status(200).json(req.body);
})
