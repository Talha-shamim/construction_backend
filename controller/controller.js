import nodemailer from 'nodemailer';

export const sendMail = (req, res) => {
    try{
        const transporter = nodemailer.createTransport({
            service : 'gmail',
            auth : {
                user : 'wethree0003@gmail.com',
                pass : 'ab120000#',
            }
        })
        
        var mailOptions = {
            from : 'wethree0003@gmail.com',
            to :   'talhashamim001@gmail.com',
            sub : 'from sksgroups.in',
            text: req.body.msg + ' from ' + req.body.to + ' email ' + req.body.email,
        }

        transporter.sendMail(mailOptions, function (error,info){
            if(error){
                console.log(error);
                res.status(501).json({message : "error"})
            }
            else{
                console.log(mailOptions)
                console.log('mail sent : ' + info.response);
                res.status(200).json({message : "success"})
            }
        })
    }
    catch(err){
        console.log(err)
    }
}