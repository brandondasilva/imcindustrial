
'use strict';

var express = require('express');
var router = express.Router();

var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

router.get ('/', function(req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.send('API v1 GET: Hello World!');
});

router.post ('/', function(req, res) {
  res.set('Access-Control-Allow-Origin', '*');

  var content = "A new contact form was submitted on the IMC Industrial website. The message and all of its information is displayed below:\n\n\n";
  content += "Name: " + req.body['name'] + "\n\n";
  content += "Email: " + req.body['from'] + "\n\n";
  content += "Subject: " + req.body['subject'] + "\n\n";
  content += "Message:\n" + req.body['message'];

  var from_email = new helper.Email("do-not-reply@imcindustrial.ca", "IMC Industrial - Contact Form");
  var to_email = new helper.Email("brandon@bdsdesign.co");
  var subject = "New email from the IMC Industrial Website!";
  var message = new helper.Content("text/plain", content);

  var mail = new helper.Mail(from_email, subject, to_email, message);

  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

  /*
   * Confrimation email to be sent back to the user who filled out the form
   */

  var content2 = "Thank you for your message! We have received your message and will get back to you as soon as we can. We've included a copy of the form you filled out just for confirmation below:\n\n\n";
  content2 += "Name: " + req.body['name'] + "\n\n";
  content2 += "Email: " + req.body['from'] + "\n\n";
  content2 += "Subject: " + req.body['subject'] + "\n\n";
  content2 += "Message:\n" + req.body['message'];

  var to_email2 = new helper.Email(req.body['from']);
  var subject2 = "Email Confirmation from IMC Industrial Contact Form";
  var message2 = new helper.Content("text/plain", content2);

  var mail2 = new helper.Mail(from_email, subject2, to_email2, message2);

  var request2 = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail2.toJSON()
  });

  /*
   * Sending the emails
   */

  sg.API(request, function(error, response) {
    // Log Response
    console.log('--EMAIL RESPONSE BEGIN--');
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
    console.log('--EMAIL RESPONSE END--\n');

    res.send(response);
  });

  sg.API(request2, function(error, response) {
    // Log Response
    console.log('--EMAIL RESPONSE BEGIN--');
    console.log(response.statusCode);
    console.log(response.body);
    console.log(response.headers);
    console.log('--EMAIL RESPONSE END--\n');
  });

});

module.exports = router;
