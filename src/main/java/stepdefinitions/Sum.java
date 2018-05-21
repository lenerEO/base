package stepdefinitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Sum {
    @Given("^User has two numbers \"([^\"]*)\" and \"([^\"]*)\"$")
    public void userHasTwoNumbersAnd(String arg0, String arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^User performs the operatio \"([^\"]*)\"$")
    public void userPerformsTheOperatio(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^The result code is \"([^\"]*)\"$")
    public void theResultCodeIs(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @And("^The result is \"([^\"]*)\"$")
    public void theResultIs(String arg0) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }
}
