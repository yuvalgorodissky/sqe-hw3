# Assignment 3: Software Quality Engineering
This is a repository for assignment 3 of the Software Quality Engineering course at the [Ben-Gurion University](https://in.bgu.ac.il/), Israel.

## Assignment Description
In this assignment, we tested an open-source software called [moodle](https://moodle.bgu.ac.il/).

Moodle is a free and open-source Learning Management System widely used in educational institutions to create, deliver and manage online courses. 
It provides teachers and instructors with a flexible platform to manage student interactions and assessments.


## Installation
You could also install Moodle on your local server, by following the instruction on the Moodle website
[installMoodle](https://docs.moodle.org/32/en/Installing_Moodle)

## What we tested


The purpose of this test is to evaluate the functionality of the Moodle website's feature that allows students to add entries to a database, as well as the capability for teachers to delete a field within said entries.

We chose to test the following user stories: 

*User story:* A teacher delete a field from the database

*Preconditions:* There is a course with a teacher , there is a database with fields in the course

*Expected outcome:* the field deleted.

*User story:* A students add a new entry to the database.

*Preconditions:* There is a course with a database with fields.

*Expected outcome:* the database contains the new entry.



**Written by Yuval Gorodissky and Noam Azulay, students in the course.**


## How we tested
We used two different testing methods:
1. [Cucumber](https://cucumber.io/), a BDD testing framework.
2. [Provengo](https://provengo.tech/), a story-based testing framework.

Each of the testing methods is elaborated in its own directory. 

## Results
## Detected Bugs
We detected a bug:
   1. General description: the entry added to database without the field that deleted, without informative warrning before the submission
   2. Steps to reproduce: student enter to add new entry, then teacher delete one filed, then student submit entry
   3. Expected result: informative warrning before the submission
   4. Actual result: the entry added to database without the field that deleted
   5. Link to the bug report: (moodle have an unspam machine so we found report about that closed to the bug that we found )[Report](https://tracker.moodle.org/browse/MDL-46765)
