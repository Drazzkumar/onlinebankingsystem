'use strict'
const Database = use("Database")
class UserController {
    async index(request, response) {
        return await Database.table("blog_posts")
            .first();
    }
}

module.exports = UserController
