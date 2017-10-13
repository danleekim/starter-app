const router = require('express').Router();
const path = require('path')

//static route for homepage to get 
//the GET call on root path links 
//the public/index.html file 
router.get('/', function (req, res){
    res.sendFile('public/index.html', {
        root: path.join(__dirname,'../..')
    });
})

//registering routes
const contactsRoutes = require('./contacts.routes');  
router.use('/api/contacts', contactsRoutes);
    
module.exports = router; 