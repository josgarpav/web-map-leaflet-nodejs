const router = require('express').Router();

//(req, res) es una función.
router.get('/', (req,res)=>{
    res.render('index');
});

module.exports = router;