Feature: Perform a request to sum
  Scenario: Perform a valid sum
    Given User has two numbers "20" and "30"
    When User performs the operatio "%2B"
    Then The result code is "200"
    And The result is "50"

  Scenario: Perform an invalid sum
    * User has two numbers "10" and "5"
    * User performs the operatio "+"
    * The result code is "400"