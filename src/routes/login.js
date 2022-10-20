const router = require('express').Router();
const basicAuth = require('express-basic-auth');
const Login = require('../views/Login');
const React = require('react');
const btoa = require('btoa');
const ReactDOMServer = require('react-dom/server');
const renderTemplate = require('../../public/lib/renderTemplate');

router.get('/', (req, res) => {
    renderTemplate(Login, null, res);
})

router.post('/' , async(req, res) => {
    const {login, password} = req.body
    try {
        if(login === "admin@gambit1" && password === "2fc9b1e387"){
            const newUser = {login, password};
        if(newUser){
            req.session.newUser = newUser.login;
            req.session.password = newUser.password;
            req.session.save(() => {
                res.redirect('/')
            })
        }else{
            res.redirect('/login');
        }
    }else{
        res.redirect('/login')
    }
    } catch (error) {
        console.log("Error---> ", error);
    }
})

module.exports = router;