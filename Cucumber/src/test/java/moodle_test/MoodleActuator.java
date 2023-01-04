package moodle_test;

import org.openqa.selenium.*;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.time.Duration;
import java.util.List;

import static org.junit.jupiter.api.Assertions.*;


public class MoodleActuator {
    private WebDriver driver;
    private WebDriverWait wait;


    public void initSession(String webDriver, String path) {

        System.setProperty(webDriver, path);
        this.driver = new ChromeDriver();
        this.wait = new WebDriverWait(driver, Duration.ofSeconds(100).toMillis());
        driver.get("http://localhost/");
        driver.manage().window().maximize();
        System.out.println("Driver setup finished for - " + driver.getTitle());
    }

    public void goToLogin() {
        driver.findElement(By.linkText("Log in")).click();
    }

    public void enterLoginInfo(String username, String password) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@id='username']"))).sendKeys(username);
        driver.findElement(By.xpath("//*[@name='password' and @type='password']")).sendKeys(password);
        driver.findElement(By.id("loginbtn")).click();
    }


    public void editModeOn() {
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@type='checkbox' and @name='setmode']"))).click();
    }

    public void myCoursesTab() {

        WebElement myCoursesTab = driver.findElement(By.xpath("//*[contains(text(),'My courses') and @role='menuitem']"));
        myCoursesTab.click();
    }

    public void goToCourse(String courseName) {
        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//*[@class='multiline' and contains(text(),'" + courseName + "')]"))).click();
    }


    public void goToDB(String db_name) {
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@data-activityname='" + db_name + "']//a"))).click();
    }

    public void newEnteryDB(List<String> elems) {
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@type='submit' and @class='btn btn-primary']"))).click();
        List<WebElement> elements = wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath("//*[contains(@id, 'field')]")));
        for (int i = 0; i < elems.size(); i++) {
            elements.get(i).sendKeys(elems.get(i));
        }

    }

    public void checkAdded(List<String> elems) {
        List<WebElement> elements = wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath("//*[@class='template-token cell c1 lastcol']")));
        for (int i = 0; i < elems.size(); i++) {
            assertEquals(elems.get(i), elements.get(i).getText());
        }
    }

    public void addDB(String db_name) {
        editModeOn();
        wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath("//*[contains(text(),'Add an activity or resource')]"))).get(0).click();
        wait.until(ExpectedConditions.presenceOfAllElementsLocatedBy(By.xpath("//*[contains(text(),'Database') and @class='optionname clamp-2']"))).get(0).click();
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='id_name']"))).sendKeys(db_name);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.id("id_submitbutton"))).click();
        editModeOn();


    }

    public void AddNewFieldsInDB(List<String> fields) {
        try {
            for (String field : fields) {

                Thread.sleep(50);
                WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//option[@value='text']")));
                element.click();
                wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@id='name']"))).sendKeys(field);
                wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@type='submit' and @value='Add']"))).click();

            }
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@class='nav more-nav nav-tabs']/li[4]/a"))).click();
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@type='submit' and @value='Save template']"))).click();
            Thread.sleep(50);
            wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@class='nav more-nav nav-tabs']/li[3]/a"))).click();

        } catch (InterruptedException e) {
            e.printStackTrace();
        }




    }

    public void deleteFieldFromDB(String field) {
        WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[text()='" + field + "']")));
        WebElement parentElement = element.findElement(By.xpath(".."));
        parentElement = parentElement.findElement(By.xpath(".."));
        WebElement last_child = parentElement.findElement(By.xpath("./*[last()]"));
        last_child = last_child.findElement(By.xpath("./*[last()]"));
        last_child = last_child.findElement(By.xpath("./*[last()]"));
        last_child.click();
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@type='submit' and text()='Continue']"))).click();


    }

    public void terminateDriver() {
        // close all the driver windows
        // another option - to close a browser window: driver.close();
        driver.quit();

    }

    public void checkDeleted() {
        WebElement element = wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@class='alert alert-success alert-block fade in  alert-dismissible']")));
        assertEquals("Field deleted", element.getText().split("\n")[0]);
    }

    public void submitEntry() {
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//*[@type='submit' and @value='Save']"))).click();

    }
}


