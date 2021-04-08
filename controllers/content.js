const Content = require('../models/content');
const { normalizeErrors } = require('../helpers/mongoose');
const jwt = require('jsonwebtoken');
const config = require('../config');



exports.saveContentDetails = function(req,res){
    console.log(req.body,"kkkkkkkkkkkkkk")
    let {title,content,image_url} = req.body;
    let data = new Content({ title,content,image_url});
    Content.find({title:req.body.title}).then(result=>{
        if(result.length>0){
            return res.json({ errors: { status: 'fail', message: 'Details Already Existed With This Title !:' }});
        }
        else{
            data.save()
            .then((data) => {
                console.log("bbbbbbbbbbbbbbbbbb",data)
                res.status(201).send({ data: data,status:'success' })
            })
            .catch((err) => {
                res.status(422).send({status:'success',message: err })
            })
        }
    })
}

exports.getAllContents = function (req, res) {
    Content.find({}).sort([['createdAt', -1]]).then(data => {
    console.log(data)
     res.status(200).send({ data: data })
    }).catch(err => {
        res.status(422).send({ "message": err })
    })

}










