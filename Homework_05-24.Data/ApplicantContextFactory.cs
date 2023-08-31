using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using Microsoft.Extensions.Configuration;

namespace Homework_05_24.Data
{
    public class ApplicantContextFactory : IDesignTimeDbContextFactory<ApplicantDataContext>
    {
        public ApplicantDataContext CreateDbContext(string[] args)
        {
            var config = new ConfigurationBuilder()
                            .SetBasePath(Path.Combine(Directory.GetCurrentDirectory(), $"..{Path.DirectorySeparatorChar}Homework_05-24.Web"))
                            .AddJsonFile("appsettings.json")
                            .AddJsonFile("appsettings.local.json", optional: true, reloadOnChange: true).Build();

            return new ApplicantDataContext(config.GetConnectionString("ConStr"));
        }
    }
}