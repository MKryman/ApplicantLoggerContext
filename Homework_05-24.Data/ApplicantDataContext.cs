using Microsoft.EntityFrameworkCore;

namespace Homework_05_24.Data
{
    public class ApplicantDataContext : DbContext
    {
        private string _connectionString;

        public ApplicantDataContext(string connectionString)
        {
            _connectionString = connectionString;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {  
            optionsBuilder.UseSqlServer(_connectionString);
        }

        public DbSet<Applicant> Applicants { get; set; }
    }
}