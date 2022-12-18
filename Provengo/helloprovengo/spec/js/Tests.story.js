/* @provengo summon selenium */

const URL = 'http://localhost/'
/*bthread('Login', function () {
  with (new SeleniumSession().start(URL)) {
    login({user: user})
  }
})*/

bthread('Greeting activity', function () {
  let greeting = choose(GREETINGS)
  let planet = choose('Jupiter', 'Mars', 'Venus', 'World')
  request(bp.Event(`${greeting}, ${planet}`))

})

bthread('Programmer', function () {
  waitFor(bp.Event('Hello, World'))
  request(bp.Event('Classic!'))
})

bthread('Don\'t Howdy Mars', function () {
  waitFor(Any(/Howdy/))
  block(Any(/Mars/))
})