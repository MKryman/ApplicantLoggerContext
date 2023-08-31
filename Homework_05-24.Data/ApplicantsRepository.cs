using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Homework_05_24.Data
{
    public class ApplicantsRepository
    {
        private string _connectionString;

        public ApplicantsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public List<Applicant> GetApplicantsByStatus(Status status)
        {
            var context = new ApplicantDataContext(_connectionString);
            return context.Applicants.Where(s => s.Status == status).ToList();
        }

        public int GetCounts(Status status)
        {
            var context = new ApplicantDataContext(_connectionString);
            return context.Applicants.Where(a => a.Status == status).Count();
        }

        public void AddNewApplicant(Applicant app)
        {
            var context = new ApplicantDataContext(_connectionString);
            context.Applicants.Add(app);
            context.SaveChanges();
        }

        public Applicant GetById(int id)
        {
            var context = new ApplicantDataContext(_connectionString);
            return context.Applicants.FirstOrDefault(a => a.Id == id);
        }

        public void UpdateStatus(Status status, int id)
        {
            var context = new ApplicantDataContext(_connectionString);
            context.Database.ExecuteSqlInterpolated($"UPDATE Applicants SET Status = {status} WHERE Id = {id}");
            context.SaveChanges();
        }
    }
}
