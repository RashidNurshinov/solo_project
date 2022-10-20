const router = require('express').Router();
require('isomorphic-fetch')
const Moysklad = require('moysklad')
const ms = Moysklad({login:"admin@gambit1",password:"2fc9b1e387"})
const Home = require('../views/Home');
const renderTemplate = require('../../public/lib/renderTemplate');

router.get('/', (req, res) => {
    const newUser = req.session?.newUser;
    if(newUser){
        ms.GET("https://online.moysklad.ru/api/remap/1.2/report/money/byaccount", {
        }).then((result) => {
            renderTemplate(Home, {newUser, result}, res);
        })
    }else{
        res.redirect('/login');
    }
})

module.exports = router