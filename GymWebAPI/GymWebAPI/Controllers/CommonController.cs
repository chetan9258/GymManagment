using GymWebAPI.Models;
using log4net;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Http;

namespace GymWebAPI.Controllers
{
    [Authorize]
    [RoutePrefix("api/Common")]
    public class CommonController : ApiController
    {
        DataLayer.DataLayer _DataLayer = new DataLayer.DataLayer();
        private static readonly ILog log = LogManager.GetLogger(typeof(GymMemberController));

        [AllowAnonymous]
        [Route("forgotPassword")]
        [HttpPost]
        public bool forgotPassword(string Email)
        {
            try
            {
                bool result = false;
                TemplateModel _model = new TemplateModel();
                _model = _DataLayer.GetTemplateDL("Email", "ForgotPassword");

                if (_model != null)
                {
                    SendEmail(Email, _model.Template1.ToString());
                    result = true;
                }

                return result;
            }
            catch (Exception ex)
            {
                log.Error("This is an error message");
                return false;
            }
        }


        [Route("SendMessage")]
        [HttpPost]
        public bool SendMessage(string Email)
        {
            try
            {
                bool result = false;
                TemplateModel _model = new TemplateModel();
                _model = _DataLayer.GetTemplateDL("Email", "ForgotPassword");

                if (_model != null)
                {
                    SendEmail(Email, _model.Template1.ToString());
                    result = true;
                }

                return result;
            }
            catch (Exception ex)
            {
                log.Error("This is an error message");
                return false;
            }
        }


        private void SendEmail(string _toEmail, string _Template)
        {
            try
            {
                //Configure the SMTP client
                SmtpClient client = new SmtpClient("smtp.gmail.com");
                client.Port = 587;
                client.UseDefaultCredentials = true;
                client.Credentials = new NetworkCredential("chetan9258@gmail.com", "srptbnwfzkfzdnrg");// App password
                client.EnableSsl = true;

                // Create the message
                MailMessage message = new MailMessage();
                message.From = new MailAddress("chetan9258@gmail.com");
                message.To.Add(new MailAddress(_toEmail));
                message.Subject = "New Password";
                message.Body = _Template;

                // Send the message
                client.Send(message);
            }
            catch (Exception ex)
            {
                log.Error("This is an error message");
                 
            }

        }

        [Route("VerifyOTP")]
        [HttpGet]
        public bool VerifyOTP(string OTPValue)
        {
            try
            {
                bool result = false;

                if (OTPValue == "999989")
                {
                    result = true;
                }
                else
                {
                    //Verify it from DB
                    result = false;
                }

                return result;
            }
            catch (Exception ex)
            {
                log.Error("This is an error message");
                return false;
            }
        }
    }
}