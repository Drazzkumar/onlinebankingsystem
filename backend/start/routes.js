'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/
const Database = use("Database")
const Route = use('Route')
const Helpers = use('Helpers')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})
Route.post('/register', "Auth/RegisterController.register").as('register')

Route.get("/posts", async () => {
  return await Database.table("blog_posts").select("*")
})


Route.post('/upload', async ({ request }) => {

  const profilePics = request.file('file', {
    types: ['image'],
  })


  const data = await profilePics.moveAll(Helpers.tmpPath('uploads'))
  console.log("ProFile", data);

  if (!data) {
    return profilePics.errors()
  }
})