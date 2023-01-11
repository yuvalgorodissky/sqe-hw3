/* @Provengo summon selenium */

/**
 *  The ComposeQuery event defines the selenium actions for logging in to the system.
 *  it takes an object that contains the username and password of the user.
 */
defineEvent(SeleniumSession, "Login_user", function (session, e) {
    // click on the login button
    session.click("//*[contains(text(),'Log in')]");
    // type the username
    session.writeText("//*[@id='username']", e.UserName);
    // type the password
    session.writeText("//*[@name='password' and @type='password']", e.Password);
    // click on the submit button
    session.click("//*[@id='loginbtn']");
});

/**
 * The Navigate_to_course_teacher event defines the selenium action for navigating to the course.
 * it takes the course name as a parameter
 */
defineEvent(SeleniumSession, "Navigate_to_course_teacher", function (session, e) {
    // click on the My courses button
    session.click("//*[contains(text(),'My courses') and @role='menuitem']");
    // click on the specified course
    session.click("//*[@class='multiline' and contains(text(),'" + e.CourseName + "')]");
});
/**
 * The Navigate_to_course_student event defines the selenium action for navigating to the course.
 * it takes the course name as a parameter
 */
defineEvent(SeleniumSession, "Navigate_to_course_student", function (session, e) {
    session.click("//*[contains(text(),'My courses') and @role='menuitem']")
    session.click("//*[@class='multiline' and contains(text(),'" + e.CourseName + "')]")
});


defineEvent(SeleniumSession, "Create_DB", function (session, e) {
    // Enables editing mode for the course
    session.click("//*[@type='checkbox' and @name='setmode']");
    // Clicks on the "Add an activity or resource" button
    session.click("//*[contains(text(),'Add an activity or resource')]");
    // Clicks on the "Database" button
    session.click("//*[contains(text(),'Database') and @class='optionname clamp-2']");
    // Writes the name of the database in the "Name" field
    session.writeText("//*[@id='id_name']", e.DBName);
    // Clicks the "Save and return to course" button
    session.click("//*[@id='id_submitbutton']");
    // Disables editing mode for the course
    session.click("//*[@type='checkbox' and @name='setmode']");
});



defineEvent(SeleniumSession, "Add_fields", function (session, e) {
    for (let i = 0; i < e.Fields.length; i++) {
        session.click("//option[@value='text']");
        session.writeText("//*[@id='name']", e.Fields[i]);
        session.click("//*[@type='submit' and @value='Add']");

    }
    session.click("//*[@class='nav more-nav nav-tabs']/li[4]/a");
    session.click("//*[@type='submit' and @value='Save template']");
    session.click("//*[@class='nav more-nav nav-tabs']/li[3]/a");
})

defineEvent(SeleniumSession, "Add_fields", function (session, e) {
    // loop through all fields in the e.Fields array
    for (let i = 0; i < e.Fields.length; i++) {
        session.click("//option[@value='text']"); // select the 'text' option for the field
        session.writeText("//*[@id='name']", e.Fields[i]); // enter the name of the field
        session.click("//*[@type='submit' and @value='Add']"); // submit the field
    }
    //  Save the fields
    session.click("//*[@class='nav more-nav nav-tabs']/li[4]/a");
    session.click("//*[@type='submit' and @value='Save template']");
    session.click("//*[@class='nav more-nav nav-tabs']/li[3]/a");
})
defineEvent(SeleniumSession, "Navigate_to_DB", function (session, e) {
    // click on the database link that has the name of the database
    session.click("//*[@data-activityname='" + e.DBName + "']//a");
});

defineEvent(SeleniumSession, "Navigate_to_add_entry", function (session, e) {
    // click on the "Add entry" button
    session.click("//*[@type='submit' and @class='btn btn-primary']");
});


defineEvent(SeleniumSession, "Student_add_new_entry", function (session, e) {
    //loops through the array of entries passed in e.Entry and enters each value into the database input field
    for (let i = 1; i < e.Entry.length+1; i++) {
        session.writeText("//*[@class='mod-data-default-template ##approvalstatusclass##']/tbody/tr["+i+"]/td/div/input", e.Entry[i-1]);
    }
})

defineEvent(SeleniumSession, "Submit_entry", function (session, e) {
    //submits the entry by clicking the 'Save' button
    session.click("//*[@type='submit' and @value='Save']");
})

defineEvent(SeleniumSession, "Teacher_delete_one_Field", function (session, e) {
    // navigate to the form fields tab
    session.click("//*[@class='nav more-nav nav-tabs']/li[3]/a");
    // select the field to delete using the index passed in e.FiledNum and click on delete button
    session.click("//*[@id='region-main']/div[2]/div[2]/table/tbody/tr["+e.FiledNum+"]/td[5]/a[2]/i");
    // confirm delete
    session.click("//*[@type='submit' and text()='Continue']");
})


defineEvent(SeleniumSession, "Check_after_submit_entry", function (session, e) {
    // This function logs in a student user, navigates to a specific course, and navigates to a specific database
    session.login_user({UserName: StudentUserName, Password: StudentPassword});
    session.navigate_to_course_student({CourseName: coursename});
    session.navigate_to_DB({DBName: dbname});
    // This loop iterates through the 'e.Entry' array and asserts that each entry is present on the page
    for (let i = 0; i < e.Entry.length; i++) {
        session.assert("//*[contains(text(),'" +e.Entry[i]+"')]", e.Entry[i]);
    }
});

defineEvent(SeleniumSession, "Check_before_submit_entry", function (session, e) {
    // This function logs in a student user, navigates to a specific course, and navigates to a specific database
    session.login_user({UserName: StudentUserName, Password: StudentPassword});
    session.navigate_to_course_student({CourseName: coursename});
    session.navigate_to_DB({DBName: dbname});
    // Asserts that the message "No entries in database" is present on the page
    session.assertText("//*[@Class='alert alert-danger alert-block fade in  alert-dismissible']", "No entries in database");
});


