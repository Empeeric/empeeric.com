var nodemailer = require('nodemailer');

var smtpTransport = nodemailer.createTransport("SMTP",{
    service: "SendGrid",
    auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD
    }
});


module.exports.handle_request = function (request, response) {
    console.log("======== Contact Us Params ========");
    console.log(request.body);
    console.log("========= End Contact Us ==========");
    var subject = request.body.message_subject || '',
        text = request.body.message_content || '',
        from_name = request.body.senders_name || '',
        from_email = request.body.senders_email || '',
        errors = [];

    if (subject === '') errors.push('missing body');
    if (text === '') errors.push('missing message text');
    if (from_name === '' && from_email === '') errors.push('missing sender name or email');

    if (errors.length != 0) {
        response.contentType('text/plain');
        response.write('Sorry, there was an error sending the message: ' +  errors.join(', '));
        response.end();
        return;
    }

    var mailOptions = {
        from: from_name + " <" + from_email + ">",
        to: 'Web Contact-Us Form <info@empeeric.com>',
        subject: subject,
        text: text
    }

    smtpTransport.sendMail(mailOptions, function(error, send_res){
        if (error) {
            console.log(error.stack || error);
            response.end(500, 'Sorry, there was an error sending the message');
            return;
        }
        response.end('The message has been sent. Thank you!');
    });
};
