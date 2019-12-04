# Elixir Developer

## Instructions

- Fork this project.
- Database is not mandatory.
- Write tests.
- Commit the important milestones and not just the final result.

## Exercise Description

- Create a RESTful API that provides access to a resource called "todos" that contains the following fields:
  - `id`: String. Unique identifier of the todo (can't be set)
  - `text`: String. Can only contain english letters. (must be set)
  - `priority`: Number. Integer in the range from 1 to 5. (default value is 3)
  - `done`: Boolean. (default value is false)

- The API must accept JSON request body, and must provide JSON response body.
- Todo items that are marked as done for longer than 5 minutes should be removed automatically.

### Endpoints

#### GET /todos

List all todo items as an array of todo objects.

#### POST /todos

Creates a new todo item, sets the given fields from the request body. Returns the new todo object.

#### GET /todos/:id

Returns the todo object.

#### PUT /todos/:id

Updates the given fields in the todo item. Returns the updated todo object.

#### DELETE /todos/:id

Removes a todo item from the collection.
