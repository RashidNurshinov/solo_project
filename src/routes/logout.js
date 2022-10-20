const router = require('express').Router();

router.get('/', async (req, res) => {
    try {
        if(req.session.newUser){
            req.session.destroy(() => {
                res.clearCookie('solo_project');
                res.redirect('/login')
            })
        }else{
            res.redirect('/login')
        }
    } catch (error) {
        console.log(`Error-->` , error)
    }
})

module.exports = router;