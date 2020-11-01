# Tasks API

## Instructions

- Fork this project.
- Write tests.
- Commit the important milestones and not just the final result.

## Exercise description

Create a RESTful API that provides access to a collection called "todos" that contains just the following fields:

- `id`: String. Unique identifier of the todo (can't be set)
- `text`: String. Can only contain english letters. (must be set)
- `priority`: Number. Integer in the range from 1 to 5. (default value is 3)
- `done`: Boolean. (default value is false)

The API must accept JSON request body, and must provide JSON response body.

## Endpoints

### GET /tasks

List all of the tasks as an array of the todo objects.

### POST /tasks

Creates a new task, sets the given fields from the request body. Returns the new task object.

### GET /tasks/:id

Returns the task object.

### PUT /tasks/:id

Updates the given fields in the task. Returns the new task object.

### DELETE /tasks/:id

Removes a task from the collection.

## Tasks

1. Save all of the tasks in a JSON file, if any modification happens. Load the collection from this file when the server restarts.
2. Remove tasks that are marked as done for 5 minutes.
3. Create unit tests for the API.
