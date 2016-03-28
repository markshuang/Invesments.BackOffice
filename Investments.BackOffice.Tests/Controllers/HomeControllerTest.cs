using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;
using Invesments.BackOffice.Controllers;
using Microsoft.AspNet.Mvc;

namespace Investments.BackOffice.Tests.Controllers
{
    public class HomeControllerTest
    {
        [Fact]
        public void ShowsAngular2IndexView()
        {
            using (var homeController = new HomeController())
            {
                var result = homeController.Angular2() as ViewResult;
                Assert.Equal("Angular2", result.ViewName);
}
        }
    }
}
