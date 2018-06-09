'use strict'

// const { validateAll } = use("validator");
const User = use("App/Models/User");
const randomString = use('random-string');
class RegisterController {
    async register({ request, response, session }) {
        // Validate user input
        // console.log(request.all());

        // const validation = await validateAll(request.all(), {
        //     username: 'required|unique:users,username',
        //     email: 'required|email|unique:users,email',
        //     password: "required"
        // })

        // if (validation.fails()) {
        //     session.withErrors(validation.messages().flashExcept(['password']));
        //     return response.redirect('back');
        // }

        // Create User
        let user = request.all();
        user.conformation_token = randomString({ length: 40 })

        // user.created_at = Date.now();
        const savedUser = await User.create(user);
        // console.log("This is user", savedUser);

        response.send(savedUser);
    }
}
module.exports = RegisterController
