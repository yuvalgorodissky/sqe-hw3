/* @Provengo summon selenium */

// The Login event defines the actions for logging in to the application.
// It fills the username and password text fields and then clicks the login button.
defineEvent(SeleniumSession, "Login", function (session, event) {
  with(session) {
    writeText("//input[@name='username']", event.username);
    writeText("//input[@name='password']", event.password);
    click("//button[@id='loginbtn']");
  }
});