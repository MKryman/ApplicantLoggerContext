using Homework_05_24.Data;
using Homework_05_24.Web.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Homework_05_24.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ApplicantController : ControllerBase
    {
        private string _connectionString;

        public ApplicantController(IConfiguration config)
        {
            _connectionString = config.GetConnectionString("ConStr");
        }

        [HttpGet][Route("getall")]
        public List<Applicant> GetApplicants(Status status)
        {
            var repo = new ApplicantsRepository(_connectionString);
            return repo.GetApplicantsByStatus(status);
        }

        [HttpGet]
        [Route("getcounts")]
        public CountViewModel GetCounts()
        {
            var repo = new ApplicantsRepository(_connectionString);
            var vm = new CountViewModel()
            {
                PendingCount = repo.GetCounts(Status.Pending),
                AcceptedCount = repo.GetCounts(Status.Accepted),
                RejectedCount = repo.GetCounts(Status.Rejected)
            };

            return vm;
        }

        [HttpPost]
        [Route("newapplicant")]
        public void NewApplicant(Applicant applicant)
        {
            var repo = new ApplicantsRepository(_connectionString);
            repo.AddNewApplicant(applicant);
        }

        [HttpGet][Route("getbyid")]
        public Applicant GetById(int id)
        {
            var repo = new ApplicantsRepository(_connectionString);
            return repo.GetById(id);
        }

        [HttpPost][Route("updatestatus")]
        public void Update(UpdateViewModel vm)
        {
            var repo = new ApplicantsRepository(_connectionString);
            repo.UpdateStatus(vm.Status, vm.Id);
        }
    }
}
