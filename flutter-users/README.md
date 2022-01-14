# Flutter Developer - User List

## Instructions

- Fork this project.
- Commit the important milestones and not just the final result.
- Use those tools you can work the the quickest, the more effective with.
- Write code which you don’t mind presenting and you’re not lost in it.
- If you face a barrier or something is unclear – try to find the right
  solution – be creative and independent.
- If you really get stuck ask for help, but in this case define your question
  thoroughly/exactly.
- Cover your code with test cases wherever you think is necessary.

___

## Application

Create a Flutter application, where you can list and edit user objects stored on a
server-based application. (like a small admin app without any authentication)

The server is located at https://assessment-users-backend.herokuapp.com. It provides 
a REST API for the User objects on the `/users`path. (`.json` extension is required 
unless the `Content-Type` header is `application/json`) Pagination is not supported.

A user object has 6 attributes, all of them are non-nullable:

- `id` (server automatically sets it)
- `first_name`
- `last_name`
- `status` (values: [`active`, `locked`])
- `created_at` (server automatically sets it)
- `updated_at` (server automatically sets it)

### exercise #1 - list

Create the application’s first screen, where the users are listed. 
Each list item should contain the user’s `first_name`, `last_name` 
and `created_at` attributes.

Users should be ordered by their `created_at` date in descending order.

### exercise #2 - activate/lock

Add a new action to the user list, with which you can activate/lock a user
object. A locked user should be distinguished from non-locked users visually.
Use the update action when modifying the status field.

### exercise #3 - create & edit

Add a new feature to the application where it is possible to create new users,
and where a selected user’s attributes can be modified. You should only be
able to set the user’s first and last name. Handle validation errors given back
from the server, display the error message below the attribute’s label.

### exercise #4 - design

Spark your ux/ui side within! Craft an app which you would confidently show to a client!

Make it nice, aesthetically pleasing. This also includes making it clear for the user
when the app is currently fetching/updating data.