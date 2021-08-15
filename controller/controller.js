import mailto from './mail.js'

export const sendMail = (req, res) => {
    try{
        let mailed = mailto(req)
        console.log(mailed);
    }
    catch(err){
        console.log(err)
    }
}