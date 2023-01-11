/* @provengo summon selenium */


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
            interrupt(Any("EndOfAction").and(Any({eventName: "Teacher_delete_one_Field"})), function () {
                login_user({UserName: StudentUserName, Password: StudentPassword})
                navigate_to_course_student({CourseName: coursename})
                navigate_to_DB({DBName: dbname})
                navigate_to_add_entry()
            })
            on(Any("EndOfAction").and(Any({eventName: "Teacher_delete_one_Field"})), function () {
                student_add_new_entry({Entry: entry});
                submit_entry()
            })

        }
    })
})

/**
 * This story logs in as a teacher, navigates to the course and database, and deletes a field from the database.
 */
story('teacher delete DB filed', function () {

    on(Any("EndOfAction").and(Any({eventName: "Add_fields"})), function () {
        with (new SeleniumSession("Teacher").start('http://localhost')) {
            login_user({UserName: TeacherUserName, Password: TeacherPassword})
            navigate_to_course_teacher({CourseName: coursename})
            navigate_to_DB({DBName: dbname})
            teacher_delete_one_Field({FiledNum: 1})
        }
    })

})

// choose(Del_Options)
story('teacher create DB and add fields ', function () {
    with (new SeleniumSession("TeacherCreate").start('http://localhost')) {
        login_user({UserName: TeacherUserName, Password: TeacherPassword})
        navigate_to_course_teacher({CourseName: coursename})
        create_DB({DBName: dbname})
        add_fields({Fields: fields})
    }
})
//
// story('AssertDataBaseFields', function () {
//     on(Any("EndOfAction").and(Any({eventName: "Add_fields"})), function () {
//         with (new SeleniumSession("AssertSession").start('http://localhost')) {
//             on(Any("EndOfAction").and(Any({eventName: "Submit_entry"})), function () {
//                 login_user({UserName: StudentUserName, Password: StudentPassword})
//                 navigate_to_course_student({CourseName: coursename})
//                 navigate_to_DB({DBName: dbname})
//                 check_after_submit_entry()
//             })
//             interrupt(Any("EndOfAction").and(Any({eventName: "Submit_entry"})), function () {
//                 check_before_submit_entry()
//             })
//         }
//     })
//
// })

// @provengo summon constraints
// Constraints.after(Any("EndOfAction").and(Any({eventName: "Navigate_to_add_entry"})))
//     .require(Any("EndOfAction").and(Any({eventName: "Student_add_new_entry"})))
//     .eventually();

// Constraints.after(Any("EndOfAction").and(Any({eventName: "Teacher_delete_one_Field"})))
//     .require(Any("EndOfAction").and(Any({eventName: "navigate_to_add_entry"}))).eventually();


// Constraints.after(Any("EndOfAction").and(Any({eventName: "Create_DB"})))
//     .require(Any("EndOfAction").and(Any({eventName: "Navigate_to_course_student"})))
//     .eventually();

Constraints.block(Any("EndOfAction").and(Any({eventName: "Teacher_delete_one_Field"})))
    .until(Any("EndOfAction").and(Any({eventName: "Navigate_to_add_entry"})));


Constraints.block(Any({eventName: "Teacher_delete_one_Field"}))
    .until(Any("EndOfAction").and(Any({eventName: "Navigate_to_add_entry"})));


