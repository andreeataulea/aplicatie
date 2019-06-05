const express = require("express");
const router = express.Router();
const cors = require('cors');



const Feedback = require("../Models/Feedbacks");
router.use(cors());


router.get('/allFeedback',(req,res)=>{
    Feedback.findAll().then((feed)=>{
        res.status(200).send(feed);
    }).catch((err)=>{
        res.status(500).send(err);
    })
})
   
router.post('/newFeedback', (request, response) => {
    Feedback.create({
    idTask: request.body.idTask,
    feedback: request.body.feedback
    }).then((feed) =>{
    response.status(200).send(feed);
    }).catch((err)=>{
        response.status(500).send(err);
    })
});




module.exports = router