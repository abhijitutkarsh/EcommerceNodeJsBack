const Mailjet = require('node-mailjet')

const mailjet = new Mailjet({
    apiKey:"ba3d9847ce5f926cdbf1a61ce5c2d576",
    apiSecret:"b545917f7d4a098c4dce4a7fba32e95f"
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
