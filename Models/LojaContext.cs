using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace CadastroClientes.Models
{
    public class LojaContext : DbContext
    {
        public LojaContext() : base("DbLoja") {
            Database.Log = instrucao => System.Diagnostics.Debug.WriteLine(instrucao);
        }

        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Consultor> Consultores { get; set; }
        public DbSet<Telefone> Telefones { get; set; }
    }
}