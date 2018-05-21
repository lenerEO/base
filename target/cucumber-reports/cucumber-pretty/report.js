$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Sum.feature");
formatter.feature({
  "line": 1,
  "name": "Perform a request to sum",
  "description": "",
  "id": "perform-a-request-to-sum",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 2,
  "name": "Perform a valid sum",
  "description": "",
  "id": "perform-a-request-to-sum;perform-a-valid-sum",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 3,
  "name": "User has two numbers \"20\" and \"30\"",
  "keyword": "Given "
});
formatter.step({
  "line": 4,
  "name": "User performs the operatio \"%2B\"",
  "keyword": "When "
});
formatter.step({
  "line": 5,
  "name": "The result code is \"200\"",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "The result is \"50\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 22
    },
    {
      "val": "30",
      "offset": 31
    }
  ],
  "location": "Sum.userHasTwoNumbersAnd(String,String)"
});
formatter.result({
  "duration": 189195655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "%2B",
      "offset": 28
    }
  ],
  "location": "Sum.userPerformsTheOperatio(String)"
});
formatter.result({
  "duration": 1770720533,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 20
    }
  ],
  "location": "Sum.theResultCodeIs(String)"
});
formatter.result({
  "duration": 13444899,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 15
    }
  ],
  "location": "Sum.theResultIs(String)"
});
formatter.result({
  "duration": 1156692,
  "error_message": "cucumber.api.PendingException: TODO: implement me\r\n\tat stepdefinitions.Sum.theResultIs(Sum.java:32)\r\n\tat ✽.And The result is \"50\"(Sum.feature:6)\r\n",
  "status": "pending"
});
formatter.scenario({
  "line": 8,
  "name": "Perform an invalid sum",
  "description": "",
  "id": "perform-a-request-to-sum;perform-an-invalid-sum",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "User has two numbers \"10\" and \"5\"",
  "keyword": "* "
});
formatter.step({
  "line": 10,
  "name": "User performs the operatio \"+\"",
  "keyword": "* "
});
formatter.step({
  "line": 11,
  "name": "The result code is \"400\"",
  "keyword": "* "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 22
    },
    {
      "val": "5",
      "offset": 31
    }
  ],
  "location": "Sum.userHasTwoNumbersAnd(String,String)"
});
formatter.result({
  "duration": 71109,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "+",
      "offset": 28
    }
  ],
  "location": "Sum.userPerformsTheOperatio(String)"
});
formatter.result({
  "duration": 196577768,
  "error_message": "java.io.IOException: Server returned HTTP response code: 400 for URL: http://api.mathjs.org/v4/?expr\u003d10+5\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getInputStream0(HttpURLConnection.java:1876)\r\n\tat sun.net.www.protocol.http.HttpURLConnection.getInputStream(HttpURLConnection.java:1474)\r\n\tat Objects.SumRequest.getHTMLCode(SumRequest.java:43)\r\n\tat stepdefinitions.Sum.userPerformsTheOperatio(Sum.java:21)\r\n\tat ✽.* User performs the operatio \"+\"(Sum.feature:10)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "400",
      "offset": 20
    }
  ],
  "location": "Sum.theResultCodeIs(String)"
});
formatter.result({
  "status": "skipped"
});
});