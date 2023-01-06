# Testing moodle software using Cucumber
This directory contains the cucumber files for testing the module DB in course module of the moodle application.

## Running the tests
Run ```RunCucumberTest.java``` to run all the tests.

## Feature files
The behaviors that we tested are in the feature files that inside the [resources/moodle_test](resources/hellocucumber) directory. See the files for a detailed description of the tests.

## Step files
The step files in the [src/test/java/moodle_test/StepDefinitions](https://github.com/yuvalgorodissky/sqe-/src/test/java/moodle_test#:~:text=StepDefinitions.java)) directory contain the code that defines how each sentence in the feature files is translated to Selenium actions. See the files for a detailed description of the implementation.
 
