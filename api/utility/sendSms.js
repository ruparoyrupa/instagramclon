
// import Vonage from'@vonage/server-sdk';

// const vonage = new Vonage({
//   apiKey: "3440493f",
//   apiSecret: "ogmLEnDBrbvNV87N"
// });

// export const sendSms = () => {
//     const from = "Vonage APIs"
//     const to = "8801782992302"
//     const text = 'Welcome to our Instagram'

// vonage.message.sendSms(from, to, text, (err, responseData) => {
//     if (err) {
//         console.log(err);
//     } else {
//         if(responseData.messages[0]['status'] === "0") {
//             console.log("Message sent successfully.");
//         } else {
//             console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
//         }
//     }
// })
// }



import axios from 'axios';

export const sendSms = async ( number , message ) => {
   
    try {

        await axios.get(` https://bulksmsbd.net/api/smsapi?api_key=v3P0aQVVjZSYykbTsbVd&type=text&number=${number}&senderid=03590900025&message=${message}`)
        
    } catch (error) {
        console.log(error);
    }
}