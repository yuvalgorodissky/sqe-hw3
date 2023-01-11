/* @provengo summon selenium */

/*
 * This script automates interactions between a student and teacher
 * using a database through Selenium. The script contains four stories:
 *
 * 1. Student fill entries in DB
 * 2. Teacher delete DB filed
 * 3. Teacher create DB and add fields
 * 4. AssertDataBaseFields
 *
 * To use this script, run the script with Provengo installed and the Selenium browser driver running.
 * You may also need to edit the variables at the top of the script to match your desired database and login credentials.
 *
 */

// The fields that will be used in the database
const fields = ['FirstName', 'LastName', 'ID'];

// The name of the database
const dbname = 'Test DB';

// The name of the course
const coursename = 'sqe-test';

// The username and password for the teacher
const TeacherUserName = 'Teacher';
const TeacherPassword = 'Teacher123!';

// The username and password for the student
const StudentUserName = 'student';
const StudentPassword = 'Student123!';

// The entry that the student will add to the database
const entry = ['Noam', 'Azulay', '212988232'];

// The options for fields that the teacher can delete
const Del_Options = [1, 2, 3];

/**
 * This story logs in as a student, navigates to the course and database, and adds an entry to the database.
 */
story('Student fill entries in DB', function () {

    on(Any("EndOfAction").and(Any({eventName: "Add_fields"})), function () {
        with (new SeleniumSession("Student").start('http://localhost')) {
            // Interrupt the story if the teacher deleted one field before.
            interrupt(Any("EndOfAction").and(Any({eventName: "Teacher_delete_one_Field"})), function () {
                // Login as student
                login_user({UserName: StudentUserName, Password: StudentPassword})
                // Navigate to the course
                navigate_to_course_student({CourseName: coursename})
                // Navigate to the database
                navigate_to_DB({DBName: dbname})
                // Navigate to the add entry page
                navigate_to_add_entry()
            })
            on(Any("EndOfAction").and(Any({eventName: "Teacher_delete_one_Field"})), function () {
                // Add new entry
                student_add_new_entry({Entry: entry});
                // Submit entry
                submit_entry()
            })

        }
    })
})

/**
 * This story logs in as a teacher, navigates to the course and database, and deletes a field from the database.
 */
story('teacher delete DB filed', function () {
    // Run this story when the "Add_fields" event occurs
    on(Any("EndOfAction").and(Any({eventName: "Add_fields"})), function () {
        // Start a Selenium session with the role "Teacher"
        with (new SeleniumSession("Teacher").start('http://localhost')) {
            // Login as teacher
            login_user({UserName: TeacherUserName, Password: TeacherPassword})
            // Navigate to the teacher view of the course
            navigate_to_course_teacher({CourseName: coursename})
            // Navigate to the database
            navigate_to_DB({DBName: dbname})
            // Delete one field from the database
            teacher_delete_one_Field({FiledNum: choose(Del_Options)})
        }
    })

})

// create the DB and add fields to it.
story('teacher create DB and add fields ', function () {
    // Start a Selenium session with the role "TeacherCreate"
    with (new SeleniumSession("TeacherCreate").start('http://localhost')) {
        // Login as teacher
        login_user({UserName: TeacherUserName, Password: TeacherPassword})
        // Navigate to the teacher view of the course
        navigate_to_course_teacher({CourseName: coursename})
        // Create the database
        create_DB({DBName: dbname})
        // Add fields to the database
        add_fields({Fields: fields})
    }
})


story('AssertDataBaseFields', function () {
    // Run this story when the "Add_fields" event occurs
    on(Any("EndOfAction").and(Any({eventName: "Add_fields"})), function () {
        // Start a Selenium session with the role "AssertSession"
        with (new SeleniumSession("AssertSession").start('http://localhost')) {
            // Run this inner function when the "Submit_entry" event occurs
            on(Any("EndOfAction").and(Any({eventName: "Submit_entry"})), function () {
                // check the database after submitting the entry
                check_after_submit_entry()
            })
            // Interrupt the above function if the "Submit_entry" event occurred before "Navigate_to_add_entry"
            interrupt(Any("EndOfAction").and(Any({eventName: "Submit_entry"})), function () {
                // check the database before submitting the entry
                check_before_submit_entry({Entry: entry})
            })
        }
    })
})


// @provengo summon constraints

// Block the "Teacher_delete_one_Field" event until "Navigate_to_add_entry" is occurred
Constraints.block(Any("EndOfAction").and(Any({eventName: "Teacher_delete_one_Field"})))
    .until(Any("EndOfAction").and(Any({eventName: "Navigate_to_add_entry"})));

// Block the "Teacher_delete_one_Field" event until "Navigate_to_add_entry" is occurred
Constraints.block(Any({eventName: "Teacher_delete_one_Field"}))
    .until(Any("EndOfAction").and(Any({eventName: "Navigate_to_add_entry"})));


