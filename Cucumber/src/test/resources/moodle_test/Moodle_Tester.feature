Feature: Scenarios for testing the DB module in moodle

  Scenario Outline: Student fill entries in DB
    Given User with UserName <tUserName> and Password <tPassword>
    And Navigate to Course <CourseName>
    And created DB <DB_name>
    And add fields <Fields>
    And User with UserName <sUserName> and Password <sPassword>
    And Navigate to Course <CourseName>
    And is in DB <DB_name>
    When add new entry to DB with <EntryElems> details
    And submit entry
    Then my new entry added with <EntryElems> details
    And terminated
    Examples:
      | sUserName | sPassword     | DB_name             | CourseName | EntryElems              | tUserName | tPassword     | Fields                  |
      | "student" | "Student123!" | "Test DB Scenario1" | "sqe-test" | "212988232,Noam,Azulay" | "teacher" | "Teacher123!" | "ID FirstName LastName" |


  Scenario Outline: teacher delete DB filed
    Given User with UserName <UserName> and Password <Password>
    And Navigate to Course <CourseName>
    And created DB <DB_name>
    And add fields <Fields>
    When teacher delete one Field <DeleteField>
    Then filed deleted
    And terminated
    Examples:
      | UserName  | Password      | DB_name             | CourseName | Fields                  | DeleteField |
      | "teacher" | "Teacher123!" | "Test DB Scenario2" | "sqe-test" | "ID FirstName LastName" | "LastName"  |


  Scenario Outline: combine teacher delete DB filed and Student fill entries in DB
    Given User with UserName <tUserName> and Password <tPassword>
    And Navigate to Course <CourseName>
    And created DB <DB_name>
    And add fields <Fields>
    And User with UserName <sUserName> and Password <sPassword>
    And Navigate to Course <CourseName>
    And is in DB <DB_name>
    When add new entry to DB with <EntryElems> details
    And switch
    And teacher delete one Field <DeleteField>
    And switch
    And submit entry
    And switch
    Then filed deleted
    And switch
    Then my new entry added with <FinalElems> details
    And terminated
    Examples:
      | sUserName | sPassword     | DB_name             | CourseName | EntryElems                   | tUserName | tPassword     | Fields                  | DeleteField | FinalElems         |
      | "student" | "Student123!" | "Test DB Scenario3" | "sqe-test" | "318963436,Yuval,Gorodissky" | "teacher" | "Teacher123!" | "ID FirstName LastName" | "LastName"  | "318963436,Yuval" |

