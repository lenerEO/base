package stepdefinitions;

import Objects.SumRequest;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class Sum {
    SumRequest req = new SumRequest();
    @Given("^User has two numbers \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userHasTwoNumbersAnd(String arg0, String arg1) throws Throwable {
        req.setNum1(arg0);
        req.setNum2(arg1);
    }

    @When("^User performs the operatio \"([^\"]*)\"$")
    public void userPerformsTheOperatio(String arg0) throws Throwable {
        req.setCode(req.getHTMLCode("http://api.mathjs.org/v4/?expr="+req.getNum1()+arg0+req.getNum2()));
    }

    @Then("^The result code is \"([^\"]*)\"$")
    public void theResultCodeIs(String arg0) throws Throwable {
        Assert.assertEquals(req.getCode(), arg0, "Los resultados no coinciden: " + req.getCode());
    }

    @And("^The result is \"([^\"]*)\"$")
    public void theResultIs(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
