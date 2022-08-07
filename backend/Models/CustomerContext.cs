using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace backendApi.Models
{
    public class CustomerContext : DbContext
    {
        public CustomerContext(DbContextOptions<CustomerContext> options)
            : base(options)
        {
        }

        public DbSet<CustomerItem> CustomerItems { get; set; } = null!;
    }
}