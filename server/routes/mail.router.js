const router = require('express').Router(),
    nodemailer = require('nodemailer');

router.route('/').post((req,res) => {
    const htmlEmail = `
        <h3>Contact Details </h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.body}</p>
    `
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'doodlewrite.manage@gmail.com',
            pass: process.env.EMAIL_PW || require('../config').email.pw,
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    let mailOptions = {
        from: 'doodlewrite.manage@gmail.com',
        to: 'doodlewrite.manage@gmail.com',
        subject: req.body.subject,
        text: req.body.body,
        html: htmlEmail
    }
    
    transporter.sendMail(mailOptions, (err,info) => {
        if(err){
            console.log(err)
            res.status(400).json(json_response)
        }
        else{
            console.log('Message Sent')
            res.send
        }
    }) 
})

module.exports = router;