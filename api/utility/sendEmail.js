import nodemailer from 'nodemailer';

export const sendEmail = async ( to , subject , text ) => {

    try {

        let transport = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            auth: {
              user: "developerrupa41@gmail.com",
              pass: "ruhatqrdpiprvpcd"
            }
          });

         await transport.sendMail({
            from : 'ruparoy860@gmail.com',
            to : to,
            subject : subject,
            text : text
          })
        
    } catch (error) {
       
        console.log(error);
    }

}