using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace CadastroClientes.Models
{
    [Table("Tb_Consultores")]
    public class Consultor
    {
        public int Id { get; set; }

        [Required]
        [MaxLength(100)]
        public string Nome { get; set; }
    }
}