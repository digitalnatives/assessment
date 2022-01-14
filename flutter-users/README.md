# Flutter Developer - User List

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

Create a Flutter application, where you can handle user objects stored on a
server-based application. The server is located at https://assessment-users-backend.herokuapp.com.
It provides a REST API for the User objects on the `/users`path. (`.json` extension is required unless the `Content-Type` header is `application/json`)

A user object has 6 attributes:

- `id` (mandatory, but the server automatically sets it)
- `first_name` (mandatory)
- `last_name` (mandatory)
- `status` (mandatory, values: [active, locked])
- `created_at` (mandatory, but the server automatically sets it)
- `updated_at` (mandatory, but the server automatically sets it)

### 1. exercise

Create the application’s first screen, where the users are listed. The list
should contain each user’s `first_name`, `last_name` and `created_at` attributes.
The backend doesn’t support paginating at all, list should be showing all the users 
as efficiently as possible.

### 2. exercise

Add a new action to the user list, with which you can activate/lock a user
object. A locked user should be distinguished from non-locked users visually.
Use the update action when modifying the status field.

### 3. exercise

Add a new feature to the application where it is possible to create new users,
and where a selected user’s attributes can be modified. You should only be
able to set the user’s first and last name. Handle validation errors given back
from the server, display the error message below the attribute’s label.

### 4. exercise

Unfortunately the app's lazy designer disappeared without finalizing his work,
so we don’t have an exact design for the user list.

Make it nice, visually pleasing. This includes also making it clear for the user
when the app is currently fetching/updating data.