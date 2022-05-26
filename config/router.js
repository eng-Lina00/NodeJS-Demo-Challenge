const express=require('express');
const router=express.Router();

const controller = require('../controllers/handlers')

router.get('/', controller.getHomePage);
router.all('/add-article', controller.postNewArticle);

router.get('/article/:id', controller.showoneArticle);

router.all('/edit-article/:id', controller.updateArticle);
router.get('/delete-article/:id', controller.deleteArticle);



module.exports=router;
