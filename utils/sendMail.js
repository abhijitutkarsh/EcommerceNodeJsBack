const Mailjet = require('node-mailjet')

const mailjet = new Mailjet({
    apiKey:"3fb1d12aa403614ca84137273874e455",
    apiSecret:"4123faa4bd4de7de0514131ac2f365b1"
})
module.exports.sendMail = async function(email,subject, body){

 return  await mailjet.post('send', { version: 'v3.1' }).request({
        Messages: [
          {
            From: {
              Email: 'abhijitu17@proton.me',
              Name: 'Abhijit',
            },
            To: email,
            Subject: subject,
            HTMLPart: body
          },
        ],
      })
}
