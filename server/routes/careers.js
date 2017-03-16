
'use strict';

var express = require('express');
var router = express.Router();

var multer = require('multer');
var upload = multer({ storage: multer.memoryStorage({}) });

var helper = require('sendgrid').mail;
var sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
var fs = require('fs');

router.get ('/', function(req, res) {
  res.set('Access-Control-Allow-Origin', '*');
  res.send('API v1 GET: Hello World!');
});

router.post ('/', upload.array('attachment', 4), function(req, res) {
  res.set('Access-Control-Allow-Origin', '*');

  var content = "A new job application was submitted on the IMC Industrial website. The message and all of its information is displayed below. If the candidate included a resume or any other files, they are attached to this email.\n\n\n";
  content += "Name: " + req.body.name + "\n\n";
  content += "Email: " + req.body.from + "\n\n";
  content += "Job Title: " + req.body.subject + "\n\n";
  content += "Job Link: " + req.body.link + "\n\n";
  content += "Message:\n" + req.body.message;

  var from_email = new helper.Email("do-not-reply@imcindustrial.ca", "IMC Industrial - Careers Portal");
  var to_email = new helper.Email("brandon@bdsdesign.co");
  var subject = "New Job Application For: [" + req.body.subject + "]";
  var message = new helper.Content("text/plain", content);

  var mail = new helper.Mail(from_email, subject, to_email, message);

  /*
   * Confrimation email to be sent back to the user who filled out the form
   */

  var content2 = "Thank you for applying to IMC Industrial. In this email we have included all of the contents of the form you submitted on imcindustrial.ca. We are currently reviewing your application and will be in contact soon. Thank you.\n\n\n";
  content2 += "Name: " + req.body.name + "\n\n";
  content2 += "Email: " + req.body.from + "\n\n";
  content2 += "Job Title: " + req.body.subject + "\n\n";
  content2 += "Job Link: " + req.body.link + "\n\n";
  content2 += "Message:\n" + req.body.message;

  var to_email2 = new helper.Email(req.body.from);
  var subject2 = "Job Application Confirmation from IMC Industrial - [" + req.body.subject + "]";
  var message2 = new helper.Content("text/plain", content2);

  var mail2 = new helper.Mail(from_email, subject2, to_email2, message2);

  if (req.files.length > 1) {
    for (var i = 0; i < req.files.length; i++) {
      mail.addAttachment(attachFile(req.files[i]));
      mail2.addAttachment(attachFile(req.files[i]));
    }
  } else {
    mail.addAttachment(attachFile(req.files[0]));
    mail2.addAttachment(attachFile(req.files[0]));
  }

  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/mail/send',
    body: mail.toJSON()
  });

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

function attachFile(doc) {

  var attachment = new helper.Attachment();
  var base64File = new Buffer(doc.buffer).toString('base64');

  attachment.setContent(base64File);
  attachment.setType(doc.mimetype);
  attachment.setFilename(doc.originalname);
  attachment.setDisposition('attachment');

  return attachment;
}

module.exports = router;
