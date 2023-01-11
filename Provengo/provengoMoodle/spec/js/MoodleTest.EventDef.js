/* @Provengo summon selenium */

// /**
//  *  The ComposeQuery event defines the selenium actions for writing the query that was given in the parameter e.
//  */
// defineEvent(SeleniumSession, "Login_user", function (session, e) {
//     session.click("//*[contains(text(),'Log in')]");
//     session.writeText("//*[@id='username']", e.UserName);
//     session.writeText("//*[@name='password' and @type='password']", e.Password);
//     session.click("//*[@id='loginbtn']");
// });
//
// /**
//  * The StartSearch event defines the selenium action for clicking the search button.
//  */
// defineEvent(SeleniumSession, "Navigate_to_course_teacher", function (session, e) {
//     session.click("//*[contains(text(),'My courses') and @role='menuitem']");
//     session.click("//*[@class='multiline' and contains(text(),'" + e.CourseName + "')]");
// });
// defineEvent(SeleniumSession, "Navigate_to_course_student", function (session, e) {
//     // waitFor(Any("EndOfAction").and(Any({eventName:"Create_DB"})))
//     session.click("//*[contains(text(),'My courses') and @role='menuitem']")
//     session.click("//*[@class='multiline' and contains(text(),'" + e.CourseName + "')]")
// });
//
// defineEvent(SeleniumSession, "Create_DB", function (session, e) {
//     session.click("//*[@type='checkbox' and @name='setmode']");
//     session.click("//*[contains(text(),'Add an activity or resource')]");
//     session.click("//*[contains(text(),'Database') and @class='optionname clamp-2']");
//     session.writeText("//*[@id='id_name']", e.DBName);
//     session.click("//*[@id='id_submitbutton']");
//     session.click("//*[@type='checkbox' and @name='setmode']");
// });
//
// defineEvent(SeleniumSession, "Add_fields", function (session, e) {
//     for (let i = 0; i < e.Fields.length; i++) {
//         session.click("//option[@value='text']");
//         session.writeText("//*[@id='name']", e.Fields[i]);
//         session.click("//*[@type='submit' and @value='Add']");
//
//     }
//     session.click("//*[@class='nav more-nav nav-tabs']/li[4]/a");
//     session.click("//*[@type='submit' and @value='Save template']");
//     session.click("//*[@class='nav more-nav nav-tabs']/li[3]/a");
// })
//
//
// defineEvent(SeleniumSession, "Navigate_to_DB", function (session, e) {
//     session.click("//*[@data-activityname='" + e.DBName + "']//a");
// })
//
//
// defineEvent(SeleniumSession, "Navigate_to_add_entry", function (session, e) {
//     // waitFor(Any("EndOfAction").and(Any({eventName: "Add_fields"})))
//     session.click("//*[@type='submit' and @class='btn btn-primary']");
// })
//
//
//
// defineEvent(SeleniumSession, "Student_add_new_entry", function (session, e) {
//     for (let i = 1; i < e.Entry.length+1; i++) {
//         session.writeText("//*[@class='mod-data-default-template ##approvalstatusclass##']/tbody/tr["+i+"]/td/div/input", e.Entry[i-1]);
//     }
// })
//
// defineEvent(SeleniumSession, "Submit_entry", function (session, e) {
//     session.click("//*[@type='submit' and @value='Save']");
// })
// defineEvent(SeleniumSession, "Teacher_delete_one_Field", function (session, e) {
//     session.click("//*[@class='nav more-nav nav-tabs']/li[3]/a");
//     session.click("//*[@id='region-main']/div[2]/div[2]/table/tbody/tr["+e.FiledNum+"]/td[5]/a[2]/i");
//     session.click("//*[@type='submit' and text()='Continue']");
// })
//
//
// defineEvent(SeleniumSession, "Check_delete_filed", function (session, e) {
//     session.assertText("//*[@class='alert alert-success alert-block fade in  alert-dismissible']", "Field deleted",TextAssertions.modifiers.Contains)
// })
// defineEvent(SeleniumSession, "Check_after_submit_entry", function (session, e) {
//      session.assertText("//*[@class='alert alert-success alert-block fade in  alert-dismissible']", "Field deleted",TextAssertions.modifiers.Contains)
// })
//
// defineEvent(SeleniumSession, "Check_before_submit_entry", function (session, e) {
//     session.assertText("//*[@Class='alert alert-danger alert-block fade in  alert-dismissible']", "No entries in database")
// })
//

/////////////////////////////////////////////////////////////////////////////////////////////////////////


defineEvent(SeleniumSession, "Login_user", function (session, e) {
});


/**
 * The StartSearch event defines the selenium action for clicking the search button.
 */
defineEvent(SeleniumSession, "Navigate_to_course_teacher", function (session, e) {
});
defineEvent(SeleniumSession, "Create_DB", function (session, e) {

});

defineEvent(SeleniumSession, "Add_fields", function (session, e) {

})


defineEvent(SeleniumSession, "Navigate_to_DB", function (session, e) {
})


defineEvent(SeleniumSession, "Navigate_to_add_entry", function (session, e) {

})


defineEvent(SeleniumSession, "Student_add_new_entry", function (session, e) {

})

defineEvent(SeleniumSession, "Submit_entry", function (session, e) {
})
defineEvent(SeleniumSession, "Teacher_delete_one_Field", function (session, e) {


})

defineEvent(SeleniumSession, "Navigate_to_course_student", function (session, e) {

});
defineEvent(SeleniumSession, "Check_after_submit_entry", function (session, e) {
})

defineEvent(SeleniumSession, "Check_before_submit_entry", function (session, e) {
})

