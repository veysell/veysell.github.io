using DataAccessLayer.Context;
using EntityLayer.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Helpers;
using System.Web.Mvc;

namespace Proje2_1.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        DataContext db = new DataContext();
        public ActionResult Update()
        {
            var username = (string)Session["Mail"];
            var degerler = db.Users.FirstOrDefault(x => x.Email == username);
            return View(degerler);
        }

        [HttpPost]
        public ActionResult Update(User data)
        {
            var username = (string)Session["Mail"];
            var user = db.Users.Where(x => x.Email == username).FirstOrDefault();
            user.Name = data.Name;
            user.SurName = data.SurName;
            user.Email = data.Email;
            user.Password = data.Password;
            user.RePassword = data.RePassword;
            db.SaveChanges();
            return RedirectToAction("Index", "Home");
        }

        public ActionResult PasswordReset()
        {
            return View();
        }

        [HttpPost]
        public ActionResult PasswordReset(string eposta)
        {
            var mail = db.Users.Where(x => x.Email == eposta).SingleOrDefault();
            if (mail != null)
            {
                Random rnd = new Random();
                int yenisifre = rnd.Next(100000, 999999);
                User sifre = new User();
                mail.Password = (Convert.ToString(yenisifre));
                mail.RePassword = (Convert.ToString(yenisifre));
                
                string fromAddress = "veyselldurannkurumsal@gmail.com";
                string fromAddressPass = "Veyskurumsal.1";
                try
                {
                    MailMessage sendMail = new MailMessage();
                    sendMail.To.Add(eposta);
                    sendMail.From = new MailAddress(fromAddress);
                    sendMail.Subject = "VeysOhm Yeni Şifre";
                    sendMail.Body = Convert.ToString(yenisifre);
                    sendMail.IsBodyHtml = true;
                    SmtpClient smtp = new SmtpClient();
                    smtp.Credentials = new NetworkCredential(fromAddress, fromAddressPass);
                    smtp.Port = 587;
                    smtp.Host = "smtp.gmail.com";
                    smtp.EnableSsl = true;
                    smtp.Send(sendMail);
                    ViewBag.uyari = "Şifreniz " + eposta + " adresine gönderilmiştir.";
                    db.SaveChanges();

                }
                catch (Exception)
                {

                    ViewBag.uyari = "Şifreniz gönderilemedi tekrar deneyiniz.";
                }



                //    var fromAddress = new MailAddress("veyselldurannkurumsal@gmail.com");
                //    var toAddress = new MailAddress(eposta);
                //    const string subject = "VeysOhm | Yeni Şifre";
                //    using (var smtp = new SmtpClient
                //    {
                //        Host = "smtp.gmail.com",
                //        Port = 587,
                //        EnableSsl = true,
                //        DeliveryMethod = SmtpDeliveryMethod.Network,
                //        UseDefaultCredentials = false,
                //        Credentials = new NetworkCredential(fromAddress.Address, "Veyskurumsal.1")
                //    })
                //    using (var message = new MailMessage(fromAddress, toAddress) { Subject = subject, Body = Convert.ToString(yenisifre) })
                //    {

                //        smtp.Send(message);
                //    }
                //ViewBag.uyari = "Şifreniz " + eposta + " adresine gönderilmiştir.";

            }
            else
            {
                ViewBag.uyari = "Şifreniz gönderilemedi tekrar deneyiniz.";
            }
            return View();
        }
    }
}