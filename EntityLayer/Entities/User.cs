using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EntityLayer.Entities
{
    public class User
    {
        public int Id { get; set; }

        //[Required(ErrorMessage ="Boş geçilemez")]
        //[Display(Name ="Ad")]
        //[StringLength(50,ErrorMessage ="En fazla 50 karakter olabilir.")]
        public string Name { get; set; }

        //[Required(ErrorMessage = "Boş geçilemez")]
        //[Display(Name = "Soyad")]
        //[StringLength(50, ErrorMessage = "En fazla 50 karakter olabilir.")]
        public string SurName { get; set; }

        //[Required(ErrorMessage = "Boş geçilemez")]
        //[Display(Name = "E-Posta")]
        //[StringLength(50, ErrorMessage = "En fazla 50 karakter olabilir.")]
        //[EmailAddress(ErrorMessage ="Email formatında olmalı")]
        public string Email { get; set; }

        //[Required(ErrorMessage = "Boş geçilemez")]
        //[Display(Name = "Kullanıcı Adı")]
        //[StringLength(10, ErrorMessage = "En fazla 10 karakter olabilir.")]
        //[DataType(DataType.Password)]
        public string UserName  { get; set; }

        //[Required(ErrorMessage = "Boş geçilemez")]
        //[Display(Name = "Şifre")]
        //[StringLength(10, ErrorMessage = "En fazla 10 karakter olabilir.")]
        //[DataType(DataType.Password)]
        public string Password  { get; set; }

        //[Required(ErrorMessage = "Boş geçilemez")]
        //[Display(Name = "Şifre")]
        //[StringLength(10, ErrorMessage = "En fazla 10 karakter olabilir.")]
        //[DataType(DataType.Password)]
        //[Compare("Password",ErrorMessage ="Şifreler Uyuşmuyor")]
        public string RePassword { get; set; }

        [StringLength(10, ErrorMessage = "En fazla 10 karakter olabilir.")]
        public string Role  { get; set; }
    }
}
