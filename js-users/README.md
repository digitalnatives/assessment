# JavaScript/Front-end Developer - User List

## Instructions

- Fork this project.
- Commit the important milestones and not just the final result.
- Go with the exercises step by step
- Use those tools you can work the the quickest, the more effective with.
- Write a code what you don’t mind to present and you’re not lost in it.
- If you face a barrier or don’t understand something – try to find the right
	solution – be creative and independent.
- If you really get stuck ask for help, but in this case define your question
	thoroughly/exactly.
- Cover your code with test cases wherever you can.

## MVC Application

**Basic information**

Create a front-end application, where you can handle user objects stored on a
server-based application. The server is located at http://js-assessment-backend.herokuapp.com.
It provides a REST API for the User objects on the `/users`path. (`.json` extension is required unless the `Content-Type` header is `application/json`)

A user object has 6 attributes:

- `id` (mandatory, but the server automatically sets it)
- `first_name` (mandatory)
- `last_name` (mandatory)
- `status` (mandatory, values: [active, locked])
- `created_at` (mandatory, but the server automatically sets it)
- `updated_at` (mandatory, but the server automatically sets it)

The application’s routing should work, so that if I create a request to the
`/new` action, the new user form should be displayed.

### 1. exercise

Create the application’s first route, where the users are listed. The list
should contain each user’s `first_name`, `last_name` and `created_at` attributes.
The list should be able to **paginate on the front-end side**
(the backend doesn’t support paginating at all), display 10 users on each page.

### 2. exercise

Add a new action to the user list, with which you can activate/lock a user
object. A locked user should be displayed with strikethroughed attributes.
Use the update action when modifying the status field.

### 3. exercise

Append 2 new routes in your application. On the `/new` route you should be able
to create new users, on the `/edit` route the selected user’s attributes can be
modified. You should only be able to set the user’s first and last name.
Handle validation errors given back from the server, display the error message
next to the attribute’s label.

### 4. exercise

Unfortunately the site’s lazy designer disappeared without finalizing his work,
so we don’t have an exact design for the user list.

Make it nice, visually pleasing. You can use external CSS libraries or
frameworks. if you have time work on the mobile version so it would be usable.
