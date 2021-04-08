const express = require('express');
const Content = require('../controllers/content');
const router = express.Router();

router.post('/saveContentDetails',Content.saveContentDetails);
router.get('/getAllContents', Content.getAllContents);


module.exports = router;