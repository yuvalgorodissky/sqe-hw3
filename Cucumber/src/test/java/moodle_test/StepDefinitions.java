package moodle_test;
import io.cucumber.java.en.*;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class StepDefinitions {


    private static List<MoodleActuator> allMoodles;
    private static MoodleActuator moodle;
    public void moodleInit() {
        System.out.println("--------------- INITIALIZING MOODLE TEST - OPENING WEBPAGE ---------------");
        if(allMoodles == null){
            allMoodles = new ArrayList<>();
        }
        moodle = new MoodleActuator();
        allMoodles.add(moodle);
        String webDriver = "webdriver.chrome.driver";
        String path = "C:\\Users\\noams\\OneDrive - post.bgu.ac.il\\שולחן העבודה\\לימודים\\שנה ג\\סמסטר א\\QA\\HW3\\sqe-hw3\\Selenium\\chromedriver.exe";
        moodle.initSession(webDriver, path);
    }


    @Given("^User is on Home Page$")
    public void init(){
        moodleInit();
    }

    @When("^User Navigate to LogIn Page$")
    public void navigateToLogin(){
        moodle.goToLogin();

    }




    @When("add new entry to DB with {string} details")
    public void add_new_entry_to_db_with_details(String elem) {
        // Write code here that turns the phrase above into concrete actions
        List<String> elems = Arrays.asList(elem.split(","));
        moodle.newEnteryDB(elems);
    }

    @Then("my new entry added with {string} details")
    public void myNewEntryAddedWithIDFirstNameLastNameDetails(String elem) {
        List<String> elems = Arrays.asList(elem.split(","));
        moodle.checkAdded(elems);

    }

    @Given("User with UserName {string} and Password {string}")
    public void userWithUserNameUserNameAndPasswordPassword(String UserName, String Password) {
        moodleInit();
        moodle.goToLogin();
        moodle.enterLoginInfo(UserName, Password);
    }

    @And("Navigate to Course {string}")
    public void navigateToCourseCourseName(String CourseName) {
        moodle.myCoursesTab();
        moodle.goToCourse(CourseName);
    }

    @And("is in DB {string}")
    public void isInDB(String DB_name) {
        moodle.goToDB(DB_name);
    }

    @And("created DB {string}")
    public void createdDB(String DB_name) {
        moodle.addDB(DB_name);
    }


    @And("add fields {string}")
    public void addFieldsFields(String Field ) {
        List<String> Fields = Arrays.asList(Field.split(" "));
        moodle.AddNewFieldsInDB(Fields);


    }

    @When("switch")
    public void switch_moodle() {
        if (allMoodles.size()==2){
            if (allMoodles.get(0)==moodle){
                moodle=allMoodles.get(1);
            }
            else {
                moodle=allMoodles.get(0);
            }
        }


    }
    @When("teacher delete one Field {string}")
    public void teacherDeleteOneFieldDeleteField(String Field) {
        moodle.deleteFieldFromDB(Field);

    }

    @Then("filed deleted")
    public void filedDeleted() {
        moodle.checkDeleted();
    }

    @And("submit entry")
    public void submitEntry() {
        moodle.submitEntry();
    }

    @And("terminated")
    public void terminated() {
        for(MoodleActuator m : allMoodles)
            m.terminateDriver();
        allMoodles = new ArrayList<>();
    }
}
