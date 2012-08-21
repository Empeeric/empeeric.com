var SendGrid = require('sendgrid').SendGrid;
var sendgrid = new SendGrid('app648985@heroku.com', 'l8r0yzpf');

module.exports.handle_request = function (request, response) {

    console.log('Sending email from contact us page');

    var subject = request.body.message_subject || '',
        text = request.body.message_content || '',
        from_name = request.body.senders_name || '',
        from_email = request.body.senders_email || '',
        errors = [];

    if (subject == '') errors.push('missing body');
    if (text == '') errors.push('missing message text');
    if (from_name == '') errors.push('missing sender name');
    if (from_email == '') errors.push('missing sender email');

    if (errors.length != 0) {
        response.contentType('text/plain');
        response.write('Sorry, there was an error sending the message: ' +  errors.join(', '));
        response.end();
        return;
    }

    sendgrid.send({
        to: 'info@empeeric.com',
        from: from_email,
        fromname: from_name,
        subject: subject,
        text: text
    }, function(success, message) {
        response.contentType('text/plain');
        response.write(success
            ? 'The message has been sent. Thank you!'
            : 'Sorry, there was an error sending the message: ' + message
        );
        response.end();
    });
};
